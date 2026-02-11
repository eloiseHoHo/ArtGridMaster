import { useParams, useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  // Mock data for blog posts - in real application, this would fetch from an API
  const blogPosts = {
    "photo-grid-for-artists": {
      title: "Photo Grid for Artists: The Complete Guide",
      date: "May 15, 2023",
      author: "Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      readTime: "8 min read",
      featuredImage: "https://images.unsplash.com/photo-1510832842230-87253f48d74f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      category: "Tutorials",
      content: `
        <h1>Photo Grid for Artists: The Complete Guide</h1>
        
        <p>The photo grid technique is one of the most valuable tools in an artist's arsenal. Whether you're a beginner looking to improve your drawing accuracy or a professional seeking efficiency in your workflow, mastering the photo grid method can transform your artistic process.</p>
        
        <h2>What is a Photo Grid?</h2>
        
        <p>A photo grid is a technique where an image is divided into equal squares or rectangles, creating a grid pattern that helps artists accurately transfer proportions and details to their canvas or paper. This method has been used by artists for centuries, from Renaissance masters to contemporary digital artists.</p>
        
        <p>The principle is simple yet powerful: by breaking down a complex image into smaller, more manageable sections, you can focus on one grid square at a time, making it easier to reproduce accurate proportions, perspectives, and details.</p>
        
        <div class="my-8">
          <img src="https://images.unsplash.com/photo-1582561833407-b95380302a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="Artist using grid method" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2 text-center">An artist using the grid method to transfer a photograph to canvas</p>
        </div>
        
        <h2>Benefits of Using Photo Grids</h2>
        
        <h3>Improved Accuracy</h3>
        <p>The most obvious benefit of using a photo grid is the dramatic improvement in accuracy. By focusing on one grid square at a time, you can more easily spot and reproduce the correct proportions and relationships between elements.</p>
        
        <h3>Perfect for Beginners</h3>
        <p>For those just starting their artistic journey, the grid method provides a structured approach to drawing and painting that builds confidence and skill. It's an excellent way to train your eye to see shapes, spaces, and relationships more accurately.</p>
        
        <h3>Scales Complex Images</h3>
        <p>When working with complex subjects or compositions, the grid method allows you to break down overwhelming details into manageable chunks, making even the most complicated scenes approachable.</p>
        
        <h3>Precise Enlargements or Reductions</h3>
        <p>Need to scale your reference photo up or down? The grid method maintains proportional accuracy regardless of size changes, making it perfect for mural work or miniatures alike.</p>
        
        <h2>How to Create and Use a Photo Grid</h2>
        
        <h3>Traditional Method</h3>
        <p>The traditional approach involves physically drawing grid lines on your reference photo (or a copy of it) and then drawing a proportional grid on your canvas or paper. Each square is then transferred one by one.</p>
        
        <h3>Digital Photo Grid Tools</h3>
        <p>Modern artists have the advantage of digital tools that can automatically apply grid overlays to reference photos. Our PhotoGrid.space application allows you to customize your grid size, opacity, color, and style with just a few clicks.</p>
        
        <div class="my-8">
          <img src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="Digital grid overlay on a portrait" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2 text-center">A digital grid overlay applied to a portrait reference photo</p>
        </div>
        
        <h2>Step-by-Step Guide to Using Photo Grids</h2>
        
        <ol class="list-decimal pl-6 space-y-3 my-6">
          <li>
            <strong>Select your reference image:</strong> Choose a high-quality photo with good lighting and clear details.
          </li>
          <li>
            <strong>Apply a grid overlay:</strong> Either manually draw a grid or use a digital tool like PhotoGrid.space to apply one automatically.
          </li>
          <li>
            <strong>Prepare your canvas or paper:</strong> Draw a proportional grid on your working surface, ensuring the number of squares matches your reference grid.
          </li>
          <li>
            <strong>Transfer one square at a time:</strong> Focus on reproducing the contents of each individual grid square rather than getting overwhelmed by the entire image.
          </li>
          <li>
            <strong>Check your proportions:</strong> Regularly step back to verify that your overall proportions are correct.
          </li>
          <li>
            <strong>Erase or hide grid lines:</strong> Once your drawing is complete, you can erase the grid lines from your artwork.
          </li>
        </ol>
        
        <h2>Advanced Photo Grid Techniques</h2>
        
        <h3>Asymmetrical Grids</h3>
        <p>For some subjects, a uniform grid might not be ideal. You can create custom grids with varying cell sizes to focus more detail on complex areas like faces in portraits while using larger cells for simpler background areas.</p>
        
        <h3>Combining with Other Methods</h3>
        <p>Many artists combine the grid method with other techniques like the block-in method or sight-size approach for even more accurate results.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        
        <ul class="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>Too few grid squares:</strong> Using too few squares can defeat the purpose of the grid method. For detailed work, aim for at least an 8×8 grid.
          </li>
          <li>
            <strong>Inconsistent grid sizing:</strong> Make sure your grid squares are precisely measured and consistent.
          </li>
          <li>
            <strong>Never looking at the whole image:</strong> While focusing on individual squares is important, periodically check the overall relationships in your drawing.
          </li>
          <li>
            <strong>Getting too caught up in details too early:</strong> Start with general shapes and forms before diving into fine details.
          </li>
        </ul>
        
        <h2>Digital vs. Traditional Grid Methods</h2>
        
        <p>Both digital and traditional approaches to the grid method have their place in an artist's workflow. Digital tools offer convenience, flexibility, and non-destructive applications, while traditional methods provide tactile feedback and can be used anywhere without technology.</p>
        
        <div class="bg-gray-50 p-6 rounded-lg my-8">
          <h3 class="text-xl font-semibold mb-4">Quick Tips for Photo Grid Success</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Number or letter your grid rows and columns for easier reference</li>
            <li>Use lightweight, easily erasable lines for your drawing grid</li>
            <li>For portraits, use a finer grid for facial features</li>
            <li>Take breaks to rest your eyes and maintain perspective</li>
            <li>Practice with simple subjects before moving to complex ones</li>
          </ul>
        </div>
        
        <h2>Conclusion</h2>
        
        <p>The photo grid method continues to be one of the most reliable and effective techniques for artists of all skill levels. By breaking down complex visual information into manageable chunks, it provides a structured approach to achieving accuracy in your drawings and paintings.</p>
        
        <p>Whether you're just starting out or looking to refine your technique, incorporating photo grids into your artistic practice can lead to significant improvements in your work. With digital tools like PhotoGrid.space, the process is easier and more flexible than ever before.</p>
        
        <p>Remember that while the grid method is an invaluable tool, it's also important to develop your observational skills. With practice, you'll find yourself relying less on the grid and more on your trained artistic eye—though many professional artists continue to use grids for complex or commissioned works where accuracy is paramount.</p>
      `
    },
    "portrait-photo-grid-techniques": {
      title: "Portrait Photo Grid Techniques for Beginners",
      date: "May 22, 2023",
      author: "Michael Torres",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      readTime: "6 min read",
      featuredImage: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      category: "Techniques",
      content: `
        <h1>Portrait Photo Grid Techniques for Beginners</h1>
        
        <p>Creating accurate portrait drawings is one of the most challenging skills for artists to master. The human face is not only complex in its structure but also something we're instinctively attuned to recognize—meaning even small errors can make a portrait look "off." This is where the portrait photo grid technique becomes invaluable.</p>
        
        <h2>Why Portraits Need Special Grid Considerations</h2>
        
        <p>Portraits are uniquely challenging because the human brain is specifically wired to recognize faces. Even minor proportional errors can dramatically affect the likeness and feel of your portrait. The photo grid method helps overcome these challenges by providing precise reference points for facial features.</p>
        
        <div class="my-8">
          <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="Portrait with grid overlay" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2 text-center">A portrait photograph with grid overlay highlighting facial proportions</p>
        </div>
        
        <h2>Portrait-Specific Grid Techniques</h2>
        
        <h3>The Facial Map Grid</h3>
        <p>When working with portraits, it's helpful to use a grid that aligns with key facial landmarks. Instead of uniform squares, consider creating a custom grid where lines intersect with the eyes, tip of the nose, mouth, and other critical features.</p>
        
        <h3>Variable Density Grids</h3>
        <p>For portrait work, you might want to use a denser grid (smaller squares) for the face itself, while using larger grid squares for hair, neck, and shoulders. This focuses your precision where it matters most.</p>
        
        <h2>Key Facial Proportions to Watch</h2>
        
        <p>When using a grid for portrait drawing, pay special attention to these critical proportions:</p>
        
        <ul class="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>Eye spacing:</strong> The distance between the eyes is typically equal to the width of one eye.
          </li>
          <li>
            <strong>Eye to nose to mouth ratios:</strong> These distances create the unique character of a face.
          </li>
          <li>
            <strong>Face width to height ratio:</strong> The overall proportions of the face shape.
          </li>
          <li>
            <strong>Ear placement:</strong> The top of the ears typically aligns with the eyebrows, while the bottom aligns with the base of the nose.
          </li>
        </ul>
        
        <h2>Step-by-Step Portrait Grid Method</h2>
        
        <ol class="list-decimal pl-6 space-y-3 my-6">
          <li>
            <strong>Select a high-quality portrait photo:</strong> Choose one with good lighting that clearly shows facial features.
          </li>
          <li>
            <strong>Apply a grid overlay:</strong> Use the PhotoGrid.space tool to apply a grid, making it finer (10x10 or more) for detailed portrait work.
          </li>
          <li>
            <strong>Draw a corresponding grid on your paper:</strong> Make sure the proportions match your reference grid.
          </li>
          <li>
            <strong>Map key facial features first:</strong> Lightly mark where the eyes, nose, mouth, and ears fall within your grid.
          </li>
          <li>
            <strong>Work from general to specific:</strong> Block in the overall head shape before detailing individual features.
          </li>
          <li>
            <strong>Check relationships between features:</strong> Verify that the distances between facial features match your reference.
          </li>
          <li>
            <strong>Refine details one grid square at a time:</strong> Focus on capturing the subtleties that make the portrait unique.
          </li>
          <li>
            <strong>Erase grid lines:</strong> Once satisfied with your drawing, carefully erase the grid lines.
          </li>
        </ol>
        
        <div class="my-8">
          <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="Male portrait with grid" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2 text-center">Using a grid to capture accurate proportions in a male portrait</p>
        </div>
        
        <h2>Common Portrait Grid Challenges</h2>
        
        <h3>Capturing Likeness</h3>
        <p>Even with a grid, capturing a true likeness can be challenging. Pay special attention to the unique characteristics of your subject—the slight asymmetries and distinctive features that make them recognizable.</p>
        
        <h3>Dealing with Hair</h3>
        <p>Hair can be particularly challenging when using a grid. Rather than trying to draw each strand, use the grid to establish the overall shape and major sections of the hair, then add detail on top.</p>
        
        <h3>Expressions and Emotions</h3>
        <p>Subtle facial expressions convey emotion. When using a grid, be careful not to flatten these expressions—pay attention to the slight tensions around the eyes and mouth that communicate feeling.</p>
        
        <div class="bg-gray-50 p-6 rounded-lg my-8">
          <h3 class="text-xl font-semibold mb-4">Portrait Grid Quick Tips</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Use a finer grid (more squares) for portraits than you might for landscapes or still lifes</li>
            <li>Pay extra attention to the eyes—they're often the focal point of a portrait</li>
            <li>Double-check the angle of the head and neck—a common source of errors</li>
            <li>Don't neglect the negative spaces between facial features</li>
            <li>For beginners, start with a straight-on portrait before attempting profiles or three-quarter views</li>
          </ul>
        </div>
        
        <h2>Advanced Portrait Techniques</h2>
        
        <h3>Combining Grids with Measuring</h3>
        <p>As you become more comfortable with portrait drawing, you can combine the grid method with comparative measuring techniques, using your pencil to verify proportions and angles.</p>
        
        <h3>Adapting for Different Ages</h3>
        <p>Facial proportions vary significantly between children and adults. When drawing children, pay attention to their distinctive proportions—larger eyes relative to the face, shorter noses, and fuller cheeks.</p>
        
        <h2>Conclusion</h2>
        
        <p>The photo grid technique is especially valuable for portrait artists, providing the structure needed to capture accurate likenesses. While mastering portrait drawing takes practice, the grid method offers a reliable framework for artists at any skill level.</p>
        
        <p>Remember that even professional portrait artists often use grids or other measuring techniques for commissioned work. There's no shame in using tools that improve your accuracy—the final result is what matters.</p>
        
        <p>With practice and patience, you'll find yourself able to capture increasingly accurate and expressive portraits, building your confidence and skill as an artist.</p>
      `
    },
    "landscape-photo-grid-mastery": {
      title: "Landscape Photo Grid Mastery: From Photo to Canvas",
      date: "May 29, 2023",
      author: "Emily Chen",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      readTime: "7 min read",
      featuredImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      category: "Techniques",
      content: `
        <h1>Landscape Photo Grid Mastery: From Photo to Canvas</h1>
        
        <p>Landscape painting presents unique challenges that differ from portraiture and still life work. With vast scenes containing numerous elements at varying distances, mountains, trees, water bodies, and skies, the landscape artist must tackle issues of scale, perspective, and composition. The photo grid method offers an excellent solution for transforming landscape photographs into stunning paintings or drawings.</p>
        
        <h2>Why Use Grids for Landscape Art</h2>
        
        <p>Landscapes contain complex spatial relationships and perspectives that can be difficult to capture accurately. The grid method helps artists organize these elements coherently, ensuring proper proportions and perspective. It's particularly useful for:</p>
        
        <ul class="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>Accurate horizon placement:</strong> A critical element in any landscape.
          </li>
          <li>
            <strong>Maintaining proportions between near and far elements:</strong> Helping to create convincing depth.
          </li>
          <li>
            <strong>Capturing complex natural formations:</strong> Like mountain ranges, tree lines, or coastlines.
          </li>
          <li>
            <strong>Scaling photographs to larger canvases:</strong> Many landscape paintings are created at larger sizes than reference photos.
          </li>
        </ul>
        
        <div class="my-8">
          <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="Landscape with grid overlay" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2 text-center">A landscape photograph with grid overlay showing key compositional elements</p>
        </div>
        
        <h2>Adapting Grid Techniques for Landscapes</h2>
        
        <h3>Horizontal Emphasis</h3>
        <p>Since many landscapes have a horizontal orientation, consider using a grid with rectangular cells rather than perfect squares. This can better align with the natural layering of landscapes (foreground, middle ground, background).</p>
        
        <h3>Perspective-Adjusted Grids</h3>
        <p>For scenes with strong perspective elements (like roads or rivers receding into the distance), you might use a grid that subtly converges toward vanishing points to help manage perspective.</p>
        
        <h2>Step-by-Step Landscape Grid Process</h2>
        
        <ol class="list-decimal pl-6 space-y-3 my-6">
          <li>
            <strong>Select an appropriate landscape photo:</strong> Choose one with clear compositional elements and good lighting.
          </li>
          <li>
            <strong>Determine the key compositional elements:</strong> Identify the horizon line, major vertical elements, and focal points.
          </li>
          <li>
            <strong>Apply a grid overlay:</strong> Use PhotoGrid.space to create a grid that aligns with these key elements.
          </li>
          <li>
            <strong>Transfer to your canvas or paper:</strong> Create a scaled grid on your working surface.
          </li>
          <li>
            <strong>Block in major zones first:</strong> Establish horizon, sky, and ground planes before detailing.
          </li>
          <li>
            <strong>Work from background to foreground:</strong> This helps maintain a sense of depth in your landscape.
          </li>
          <li>
            <strong>Add details progressively:</strong> Move from general shapes to specific details as you work.
          </li>
        </ol>
        
        <h2>Special Considerations for Landscape Elements</h2>
        
        <h3>Sky and Clouds</h3>
        <p>The grid helps place cloud formations accurately, but be careful not to become too rigid. Clouds often benefit from a somewhat freer interpretation while maintaining their general shapes and positions.</p>
        
        <h3>Water and Reflections</h3>
        <p>Use the grid to ensure reflections line up correctly with their source objects. Water surfaces typically show horizontal reflections that align precisely with the objects being reflected.</p>
        
        <h3>Trees and Vegetation</h3>
        <p>The grid helps place trees and establish their general size and shape, but don't try to reproduce every branch and leaf exactly. Use the grid for the overall form, then add detail according to your artistic style.</p>
        
        <div class="my-8">
          <img src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" alt="Seascape with grid" class="rounded-lg w-full" />
          <p class="text-sm text-gray-500 mt-2 text-center">Using a grid to accurately capture the horizon line and reflections in a seascape</p>
        </div>
        
        <h2>Balancing Accuracy with Artistic Interpretation</h2>
        
        <p>While the grid method helps with accuracy, landscape painting often benefits from selective interpretation. Consider:</p>
        
        <ul class="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>Simplifying complex elements:</strong> Not every tree or rock needs to be reproduced exactly.
          </li>
          <li>
            <strong>Enhancing compositional elements:</strong> You might slightly adjust the size or position of elements for better composition.
          </li>
          <li>
            <strong>Modifying lighting effects:</strong> You can emphasize certain lighting qualities that appeal to you artistically.
          </li>
          <li>
            <strong>Adding or removing minor elements:</strong> The grid helps with placement, but you can still make editorial decisions.
          </li>
        </ul>
        
        <div class="bg-gray-50 p-6 rounded-lg my-8">
          <h3 class="text-xl font-semibold mb-4">Landscape Grid Quick Tips</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Use a slightly larger grid for landscapes than for portraits (fewer squares)</li>
            <li>Pay careful attention to the horizon line placement—it's crucial for landscape composition</li>
            <li>For large landscape paintings, consider using a string grid on your canvas</li>
            <li>Take special care with linear elements like roads, rivers, or fences that create perspective</li>
            <li>Number/letter your grid for easier reference when working with complex scenes</li>
          </ul>
        </div>
        
        <h2>When to Adapt or Abandon the Grid</h2>
        
        <p>As you develop your landscape painting skills, you'll find that the grid becomes more of a starting point than a strict requirement. Many experienced landscape artists will:</p>
        
        <ul class="list-disc pl-6 space-y-3 my-6">
          <li>
            <strong>Use a minimal grid:</strong> Just a few key lines to establish horizon and major compositional elements.
          </li>
          <li>
            <strong>Combine with other techniques:</strong> Sight-size method or simple measuring alongside partial grid references.
          </li>
          <li>
            <strong>Create thumbnail sketches:</strong> Using the grid method for a small practice version before tackling the final piece.
          </li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>The photo grid method provides an excellent framework for transforming landscape photographs into paintings or drawings. It helps manage the complex spatial relationships and perspective challenges inherent in landscape art while still allowing for artistic interpretation and expression.</p>
        
        <p>By mastering the grid technique for landscapes, you'll develop greater confidence in tackling even the most complex natural scenes. Remember that the grid is a tool to serve your artistic vision—it should never constrain your creativity or individual expression.</p>
        
        <p>With practice, you'll find your own perfect balance between grid-assisted accuracy and artistic freedom, developing a landscape painting process that works for your unique style and goals.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-center mb-6">Blog Post Not Found</h1>
        <p className="text-gray-600 text-center mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <div className="flex justify-center">
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Photo Grid Blog - PhotoGrid.space</title>
        <meta 
          name="description" 
          content={post.title + " - " + post.content.split('<p>')[1].split('</p>')[0].substring(0, 160) + "..."}
        />
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title + " | Photo Grid Blog"} />
        <meta property="og:description" content={post.content.split('<p>')[1].split('</p>')[0].substring(0, 160) + "..."} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.photogrid.space/blog/${slug}`} />
        <meta property="og:image" content={post.featuredImage} />
        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.photogrid.space/blog/${slug}`} />
      </Helmet>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
        
        {/* Featured image */}
        <div className="rounded-xl overflow-hidden mb-8 aspect-[2/1]">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Post header */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <span className="bg-primary-100 text-primary-800 text-sm rounded-full px-3 py-1">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-800 font-medium">{post.author}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
              <Clock className="h-4 w-4 ml-3 mr-1" />
              {post.readTime}
            </div>
          </div>
        </div>
        
        {/* Post content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Share and actions */}
        <div className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">Share this article:</div>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ThumbsUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related posts section */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(blogPosts)
              .filter(p => p.title !== post.title)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={relatedPost.featuredImage}
                    alt={relatedPost.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{relatedPost.title}</h3>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary" 
                      onClick={() => navigate(`/blog/${Object.keys(blogPosts)[Object.values(blogPosts).indexOf(relatedPost)]}`)}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}