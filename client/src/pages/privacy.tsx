import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - PhotoGrid.space</title>
        <meta name="description" content="Privacy Policy for PhotoGrid.space. Learn how we handle your data and protect your privacy." />
        <link rel="canonical" href="https://photogrid.space/privacy" />
        <meta property="og:title" content="Privacy Policy - PhotoGrid.space" />
        <meta property="og:description" content="Privacy Policy for PhotoGrid.space. Learn how we handle your data and protect your privacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photogrid.space/privacy" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/"><a className="hover:text-gray-900">Home</a></Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Privacy Policy</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Introduction</h2>
            <p>PhotoGrid.space ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at photogrid.space (the "Service").</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.1 Image Data</h3>
            <p>All image processing on PhotoGrid.space happens entirely in your web browser (client-side). Your images are never uploaded to our servers, stored on our systems, or shared with any third party. Once you close or refresh the page, all image data is removed from browser memory.</p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information through cookies and similar technologies, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>IP address (anonymized where possible)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.3 Cookies</h3>
            <p>We use cookies and similar tracking technologies to improve your experience on our website. These include:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly (e.g., remembering your preferences).</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website so we can improve it.</li>
              <li><strong>Advertising cookies:</strong> Used by our advertising partners (such as Google AdSense) to show you relevant advertisements.</li>
            </ul>
            <p className="mt-2">You can control cookie preferences through your browser settings. Disabling certain cookies may affect your experience on the website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>Analyze usage patterns and optimize performance</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Third-Party Services</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">4.1 Google AdSense</h3>
            <p>We use Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-gray-900 underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.</p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">4.2 Google Analytics</h3>
            <p>We may use Google Analytics to analyze website traffic. Google Analytics collects data through cookies about your interactions with our website. For more information, visit <a href="https://policies.google.com/privacy" className="text-gray-900 underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Data Retention</h2>
            <p>Since we do not collect personal image data, there is no image data to retain. Automatically collected analytics data is retained in accordance with our analytics provider's data retention policies, typically up to 26 months.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong>Deletion:</strong> Request deletion of your data.</li>
              <li><strong>Opt-out:</strong> Opt out of personalized advertising and analytics tracking.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
            </ul>
            <p className="mt-2">To exercise these rights, please contact us at the email address provided below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Children's Privacy</h2>
            <p>Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. International Users</h2>
            <p>If you are accessing our Service from the European Economic Area (EEA) or other regions with data protection laws, please note that your information may be processed in countries with different data protection standards. By using our Service, you consent to the transfer and processing of your information in accordance with this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of the Service after any changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> contact@photogrid.space</p>
          </section>
        </div>
      </main>
    </>
  );
}
