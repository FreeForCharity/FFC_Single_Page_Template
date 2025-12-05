'use client'
import React from 'react'

const UnderstandingHosting: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-[160px] pb-[70px]">
      <div className="w-full max-w-[90%] md:max-w-[80%] mx-auto" id="aria-font">
        <h1 className="font-[400] text-[30px] text-[#333] leading-[30px] pb-[10px]">
          Understanding Your Free For Charity WordPress Website Hosting: A Layered Approach
        </h1>

        <p className="font-[400] text-[14px] text-[#666] leading-[24px] pb-[1em]">
          Your FreeForCharity.org website utilizes a powerful combination of services to provide a
          secure, reliable, and feature-rich online presence. Think of it like a layered cake, with
          each layer playing a crucial role:
        </p>

        {/* 1️⃣ Foundation */}
        <ol className="list-decimal list-inside pb-[1em]">
          <li className="font-[700] text-[14px] text-[#666] leading-[26px]">
            Foundation: Interserver.net (DirectAdmin)
          </li>
        </ol>

        <ul className="list-disc list-inside pb-[1em]">
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">What it is:</span> This is the bedrock of your website –
            the server where all your website files are stored. Interserver.net provides the
            physical hardware and network infrastructure, while DirectAdmin offers the control panel
            to manage your server environment.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Support:</span> For server-level issues (e.g., website
            down, server errors), you would contact Interserver.net support directly.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Analogy:</span> Think of this as the land your house is
            built on.
          </li>
        </ul>

        {/* 2️⃣ WordPress Installation */}
        <ol className="list-decimal list-inside pb-[1em]" start={2}>
          <li className="font-[700] text-[14px] text-[#666] leading-[26px]">
            WordPress Installation: Softaculous
          </li>
        </ol>

        <ul className="list-disc list-inside pb-[1em]">
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">What it is:</span> Softaculous is a tool that automates the
            installation of WordPress on your server. It simplifies the process, making it quick and
            easy to get started.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Support:</span> While Softaculous makes installation easy,
            for issues related to the WordPress core itself, you would generally refer to
            Interserver support resources or Free For Charity Admins for help.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Analogy:</span> This is like the foundation of your house.
          </li>
        </ul>

        {/* 3️⃣ Plugins */}
        <ol className="list-decimal list-inside pb-[1em]" start={3}>
          <li className="font-[700] text-[14px] text-[#666] leading-[26px]">Plugins: WPMUDEV</li>
        </ol>

        <ul className="list-disc list-inside pb-[1em]">
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">What it is:</span> WPMUDEV provides a suite of powerful
            plugins that extend the functionality of your WordPress website. These plugins handle
            tasks like security, performance optimization, backups, and more.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Support:</span> For any issues with WPMUDEV plugins, first
            access the help guides on the WPMUDEV website. After this contact your Free For Charity
            Admin.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Analogy:</span> These are like the essential utilities in
            your house – electricity, plumbing, etc.
          </li>
        </ul>

        {/* 4️⃣ Theme */}
        <ol className="list-decimal list-inside pb-[1em]" start={4}>
          <li className="font-[700] text-[14px] text-[#666] leading-[26px]">Theme: Divi</li>
        </ol>

        <ul className="list-disc list-inside pb-[1em]">
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">What it is:</span> Divi is a popular WordPress theme that
            controls the visual appearance and layout of your website. It provides a user-friendly
            interface for customizing your design.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Support:</span> For help with Divi theme features,
            customization, or troubleshooting, you would contact Elegant Themes (the creators of
            Divi) support pages. If this fails then you would contact your Free For Charity Admin.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Analogy:</span> This is the interior design and
            architecture of your house.
          </li>
        </ul>

        {/* 5️⃣ DNS and SSL */}
        <ol className="list-decimal list-inside pb-[1em]" start={5}>
          <li className="font-[700] text-[14px] text-[#666] leading-[26px]">
            DNS and SSL: Cloudflare
          </li>
        </ol>

        <ul className="list-disc list-inside pb-[1em]">
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">What it is:</span> Cloudflare acts as a protective layer
            between your website and the internet. It enhances security with SSL certificates
            (HTTPS) and improves website performance by caching content. It also manages your DNS
            (Domain Name System), which connects your domain name (e.g. freeforcharity.org) to your
            server.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Support:</span> For any DNS or SSL issues, Cloudflare’s
            support resources and documentation are available. If these fail then contact your Free
            For Charity Admin.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Analogy:</span> Think of this as the security system and
            front gate of your property.
          </li>
        </ul>

        {/* 6️⃣ Email */}
        <ol className="list-decimal list-inside pb-[1em]" start={6}>
          <li className="font-[700] text-[14px] text-[#666] leading-[26px]">
            Email: Microsoft 365
          </li>
        </ol>

        <ul className="list-disc list-inside pb-[1em]">
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">What it is:</span> Your email services are handled by
            Microsoft 365, a separate platform providing email hosting, productivity tools, and
            cloud storage.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Support:</span> For any email-related concerns, you would
            reach out to Microsoft 365 support. These tickets take time but cannot be done by Free
            For Charity and must be done by the organization itself. Your Free For Charity Admin can
            help you craft the support request and join calls with Microsoft as needed.
          </li>
          <li className="font-[400] text-[14px] text-[#666] leading-[24px]">
            <span className="font-[700]">Analogy:</span> This is like having a separate postal
            service for your house.
          </li>
        </ul>

        {/* Final Notes */}
        <p className="font-[700] text-[14px] text-[#666] leading-[26px] pb-[1em]">
          FreeForCharity.org: Your Central Hub
        </p>
        <p className="font-[400] text-[14px] text-[#666] leading-[26px] pb-[1em]">
          FreeForCharity.org acts as the coordinator and overseer of this entire ecosystem. We bring
          together these different services and ensure they work harmoniously to power your online
          presence. However, it’s important to understand that each service provider has its own
          specialized support system.
        </p>
        <p className="font-[400] text-[14px] text-[#666] leading-[26px] pb-[1em]">
          Think of FreeForCharity.org as the general contractor who built your house. We coordinated
          the various subcontractors (Interserver, Softaculous, WPMUDEV, Divi, Cloudflare, Microsoft
          365) but each subcontractor is responsible for their own work.
        </p>
        <p className="font-[700] text-[14px] text-[#666] leading-[26px] pb-[1em]">Need Help?</p>
        <p className="font-[400] text-[14px] text-[#666] leading-[26px] pb-[1em]">
          If you encounter an issue, FreeForCharity.org will be there to support you. We can help
          diagnose the problem and direct you to the appropriate support channel for the specific
          service involved.
        </p>
        <p className="font-[400] text-[14px] text-[#666] leading-[26px] pb-[1em]">
          This layered approach provides a robust and scalable solution for your website, ensuring
          that you have access to expert support at every level.
        </p>
        <p className="font-[400] text-[14px] text-[#666] leading-[26px] pb-[1em]">
          NOTE: If your support ticket with Free For Charity has not been answered in 48 hours, text
          the Founder Clarke Moyer directly at 520-222-8104
        </p>
      </div>
    </div>
  )
}

export default UnderstandingHosting
