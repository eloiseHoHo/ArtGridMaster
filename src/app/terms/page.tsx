import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for PhotoGrid.space. Read the terms and conditions for using our free photo transformation tools.",
  alternates: { canonical: "https://www.photogrid.space/terms" },
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Terms of Service</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: February 26, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using PhotoGrid.space (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.</p>
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
          <p>The Service, including its design, features, code, and content (excluding user-uploaded images), is owned by PhotoGrid.space and is protected by copyright and other intellectual property laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Disclaimer of Warranties</h2>
          <p>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, PhotoGrid.space shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Third-Party Content and Advertisements</h2>
          <p>The Service may display advertisements provided by third parties, including Google AdSense. We are not responsible for the content of these advertisements or for any products or services offered by third-party advertisers. Your interactions with advertisers are solely between you and the advertiser. We are not liable for any loss or damage arising from your interactions with third-party advertisements or advertisers.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Data Processing</h2>
          <p>By using the Service, you acknowledge that certain non-personal data may be collected through cookies and analytics tools as described in our <Link href="/privacy" className="text-gray-900 dark:text-gray-100 underline">Privacy Policy</Link>. This data is used to improve the Service and display relevant advertisements.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Modifications to Service</h2>
          <p>We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time without prior notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">10. Changes to Terms</h2>
          <p>We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after any changes indicates your acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">11. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> contact@photogrid.space</p>
        </section>
      </div>
    </main>
  );
}
