import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { ImageIcon, RefreshCw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

export default function ImageUploader() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
      
      const xhr = new XMLHttpRequest();
      
      // Track upload progress
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      };
      
      return new Promise((resolve, reject) => {
        xhr.open("POST", "/api/images/upload");
        
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error(xhr.statusText));
          }
        };
        
        xhr.onerror = () => reject(new Error("Network error"));
        
        xhr.send(formData);
      });
    },
    onSuccess: (data) => {
      // Navigate to the transform page with the image ID
      navigate(`/transform/${data.id}`);
      toast({
        title: "Upload Successful",
        description: "Your image is ready to transform",
      });
    },
    onError: (error) => {
      setUploadProgress(0);
      toast({
        title: "Upload Failed",
        description: error.message || "There was an error uploading your image",
        variant: "destructive",
      });
    }
  });
  
  // Handle file drop
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      
      // Validate file size
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      
      // Create preview
      setPreviewImage(URL.createObjectURL(file));
      
      // Start upload
      uploadMutation.mutate(file);
    }
  }, [uploadMutation, toast]);
  
  // Reset upload
  const handleReset = useCallback(() => {
    setPreviewImage(null);
    setUploadProgress(0);
    uploadMutation.reset();
  }, [uploadMutation]);
  
  // Configure dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1,
    disabled: uploadMutation.isPending
  });
  
  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-xl p-8 text-center 
        ${!previewImage ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white'} 
        ${isDragActive ? 'border-primary' : 'border-gray-300'}
        transition-all cursor-pointer
      `}
    >
      <input {...getInputProps()} />
      
      {!previewImage ? (
        <div className="mx-auto">
          <ImageIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">Upload your image</h3>
          <p className="text-gray-500 mb-4">
            {isDragActive
              ? "Drop the image here ..."
              : "Drag and drop an image here, or click to browse"
            }
          </p>
          <Button>
            <ImageIcon className="mr-2 h-4 w-4" />
            Select Image
          </Button>
          <p className="text-xs text-gray-500 mt-4">Supported formats: JPG, PNG (Max 10MB)</p>
        </div>
      ) : (
        <div>
          <div className="relative rounded-xl overflow-hidden mx-auto max-w-lg">
            <img 
              src={previewImage} 
              alt="Preview" 
              className="w-full object-cover"
            />
            
            {uploadMutation.isPending && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <RefreshCw className="h-8 w-8 text-white animate-spin mb-2" />
                <div className="text-white mb-2">Uploading... {uploadProgress}%</div>
                <div className="w-3/4">
                  <Progress value={uploadProgress} />
                </div>
              </div>
            )}
            
            {!uploadMutation.isPending && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="sm" className="mx-1" onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm" className="mx-1" onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          
          {!uploadMutation.isPending && (
            <p className="text-sm text-gray-500 mt-3 text-center">Image ready for transformation</p>
          )}
        </div>
      )}
    </div>
  );
}
