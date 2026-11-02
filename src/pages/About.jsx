export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">About WanaLab</h1>
      <p className="text-gray-500 mb-8">Based in Wana, South Waziristan — Built for Global Researchers & Freelancers</p>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p><strong>WanaLab (wanalab.org)</strong> is a global research and freelancer platform, proudly based in <strong>Wana, South Waziristan, Pakistan.</strong></p>
        <p>From Wana to the world — we build open resources for researchers, academics, and freelancers everywhere.</p>
        
        <h2 className="text-2xl font-semibold mt-10">Our Story</h2>
        <p>Great ideas don't need a big city. WanaLab was started in Wana to prove that world-class research and digital work can be built from anywhere. Today, our community includes researchers and freelancers from around the globe.</p>

        <h2 className="text-2xl font-semibold">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-gray-50 rounded-xl">
            <h3 className="font-bold">For Global Researchers</h3>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>Open research resources and tools</li>
              <li>Publication support, Scholar/ORCID optimization</li>
              <li>Global research collaboration</li>
            </ul>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl">
            <h3 className="font-bold">For Global Freelancers</h3>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>Freelancing guides and templates</li>
              <li>Portfolio building for global marketplaces</li>
              <li>Remote work best practices</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10">Founder</h2>
        <div className="p-6 border rounded-xl">
          <p className="font-bold text-lg">Nasir — Founder, WanaLab</p>
          <p className="text-sm text-gray-600">Based in Wana, South Waziristan | Working Globally</p>
          <div className="mt-3 text-sm space-y-1">
            <p>Email: <a className="text-blue-600" href="mailto:nasir@wanalab.org">nasir@wanalab.org</a> (Verified)</p>
            <p>Google Scholar: Verified Researcher at wanalab.org</p>
            <p>ORCID: <a className="text-blue-600" href="https://orcid.org/0009-0002-6006-0796">0009-0002-6006-0796</a></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10">Not Affiliated — Clarification</h2>
        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl text-sm">
          <p><strong>Is WanaLab related to Wanna Labs or Wanalab France?</strong></p>
          <p className="mt-2">
            No. WanaLab.org is independent.<br/>
            • <strong>Wanna Labs</strong> is a fashion / streetwear apparel brand.<br/>
            • <strong>Wanalab France</strong> is a home improvement brand.<br/>
            • <strong>WanaLab.org (WanaLab)</strong> is a research & free tools platform from Wana, South Waziristan, Pakistan founded by Nasir.
          </p>
        </div>

        <p className="pt-4"><strong>WanaLab is for you — wherever you are.</strong> Contact: nasir@wanalab.org</p>
      </div>
    </div>
  )
}
