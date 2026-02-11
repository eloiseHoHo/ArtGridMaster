import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - PhotoGrid.space</title>
        <meta name="description" content="Terms of Service for PhotoGrid.space. Read the terms and conditions for using our free photo transformation tools." />
        <link rel="canonical" href="https://www.photogrid.space/terms" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/"><a className="hover:text-gray-900">Home</a></Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Terms of Service</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using PhotoGrid.space (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Description of Service</h2>
            <p>PhotoGrid.space provides free online tools for transforming photos into various artistic formats including grid overlays, line art, sketches, coloring pages, paint by numbers, pixel art, and painting effects. All image processing is performed client-side in your web browser.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. User Responsibilities</h2>
            <p>When using our Service, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Only upload images that you own or have the right to use</li>
              <li>Not use the Service for any illegal or unauthorized purpose</li>
              <li>Not attempt to interfere with or disrupt the Service</li>
              <li>Not attempt to reverse-engineer or extract source code from the Service</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Intellectual Property</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">4.1 Your Content</h3>
            <p>You retain all rights to the images you upload and the transformed outputs you create using our Service. We do not claim any ownership of your content.</p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">4.2 Our Content</h3>
            <p>The Service, including its design, features, code, and content (excluding user-uploaded images), is owned by PhotoGrid.space and is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our Service without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Disclaimer of Warranties</h2>
            <p>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>The Service will be uninterrupted or error-free</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
              <li>The quality of any products, services, information, or other material obtained through the Service will meet your expectations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, PhotoGrid.space shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, profits, or goodwill, arising out of or in connection with your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Third-Party Content and Advertisements</h2>
            <p>The Service may display advertisements provided by third parties, including Google AdSense. We are not responsible for the content of these advertisements or for any products or services offered by third-party advertisers. Your interactions with advertisers are solely between you and the advertiser.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Modifications to Service</h2>
            <p>We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Changes to Terms</h2>
            <p>We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after any changes indicates your acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> contact@photogrid.space</p>
          </section>
        </div>
      </main>
    </>
  );
}
