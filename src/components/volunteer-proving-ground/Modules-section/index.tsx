import React from 'react'
import Modulecard from '@/components/ui/Module-card'

const index = () => {
  return (
    <div>
      <Modulecard title="Module 1: LastPass - Our Security Standard" id="module1">
        <p className="font-500">
          <span className="font-[700]">Objective:</span> To understand the importance of password
          security and how to use LastPass to manage credentials securely.
        </p>

        <p className="mt-6">
          <span className="font-[700]">Estimated Time to Complete:</span> 1 - 2 Hours
        </p>

        <p className="mt-6">
          <span className="font-[700]">Why This Is First:</span> We handle sensitive information for
          our non-profit clients. Protecting that data is our highest priority. LastPass is the
          first and most critical training module because it is the secure foundation upon which all
          other system access is built. All passwords for the other training modules and FFC
          services will be stored in and managed by LastPass.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Recommended Training Resources
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <a
              href="https://www.youtube.com/watch?v=example-lastpass-101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              LastPass 101: How to Use LastPass (Official Video)
            </a>{' '}
            - The best starting point for understanding your vault.
          </li>
          <li>
            <a
              href="https://usertraining.lastpass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              LastPass User Training & Resources (Official)
            </a>{' '}
            - A comprehensive page with guides and videos for all features.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          LastPass Authenticator for Multi-Factor Authentication (MFA)
        </h2>

        <p className="mt-4">
          For enhanced security, we use MFA. The LastPass Authenticator app is a required tool for
          verifying your identity when logging into secure systems.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li>
            <a
              href="https://support.lastpass.com/s/document-item?language=en_US&bundleId=lastpass&topicId=LastPass%2FLastPass_Authenticator.html&_LANG=enus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              What is the LastPass Authenticator App? (Official Guide)
            </a>
          </li>
          <li>
            Mobile Apps:{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.lastpass.authenticator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Play Store
            </a>{' '}
            |{' '}
            <a
              href="https://apps.apple.com/us/app/lastpass-authenticator/id1079110004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apple App Store
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Proficiency Task</h2>

        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-red-600 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            After completing the training, be prepared to explain why sharing passwords via email or
            text is a security risk.
          </p>
        </div>
      </Modulecard>

      <Modulecard title="Module 2: Introduction to AI Assistants" id="module2">
        <p className="font-[500]">
          <span className="font-[700]">Objective:</span> To understand the basic capabilities of
          generative AI tools and learn how to write effective prompts to boost productivity.
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Estimated Time to Complete:</span> 2 - 4 Hours
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Why This Is Second:</span> AI assistants are powerful
          learning accelerators. Mastering them early will drastically speed up your learning
          process for all subsequent modules. When you encounter a new term, product, or tool in
          this training, your first step should be to ask an AI assistant to explain it to you. This
          practice of self-directed learning is a critical skill for all FFC volunteers.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Recommended Training Resources
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 font-[500]">
          <li>
            <a
              href="https://learn.microsoft.com/en-us/copilot/tutorials/learn-microsoft-copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Get Started with Microsoft Copilot (Official Tutorial)
            </a>
          </li>
          <li>
            <a
              href="https://gemini.google/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              About Gemini (Official Google Page)
            </a>
          </li>
          <li>
            Mobile Apps (Google Play Store):{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.microsoft.copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Microsoft Copilot
            </a>{' '}
            |{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Gemini
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Proficiency Task</h2>

        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-red-600 rounded-r-lg">
          <p className="text-gray-800 font-[500]">
            After completing the training, be prepared to list the four key elements of an effective
            prompt for an AI assistant.
          </p>
        </div>
      </Modulecard>

      <Modulecard title="Module 3: MS-900 Microsoft 365 Fundamentals" id="module3">
        <p className="font-[500]">
          <span className="font-[700]">Objective:</span> To gain a foundational knowledge of
          Microsoft 365 cloud services, including its apps, security, compliance, and pricing
          models.
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Estimated Time to Complete:</span> 12 - 16 Hours
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Why This Matters:</span> Free For Charity’s entire
          operational infrastructure is built on the Microsoft 365 platform. A fundamental
          understanding of this ecosystem is critical for every volunteer to work efficiently,
          securely, and understand the capabilities of the tools we use every day.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Recommended Training Resources
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 font-[500]">
          <li>
            <a
              href="https://learn.microsoft.com/en-us/training/courses/ms-900t01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Microsoft Learn Self-Paced Course (Official)
            </a>{' '}
            - This is the primary, self-paced learning path provided directly by Microsoft.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Official MS-900 Study Guide
            </a>{' '}
            - A detailed guide from Microsoft that outlines all exam objectives.
          </li>
        </ul>

        {/* Blue Callout Box */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="font-[700] text-blue-900">A Note on Certification:</p>
          <p className="mt-2 text-blue-800 font-[500]">
            Only completing the learning paths above is required to start volunteering. However,
            funding for the official Microsoft certification exam may be provided on a case-by-case
            basis, depending on available funds and volunteer commitment.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Proficiency Task</h2>

        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-red-600 rounded-r-lg">
          <p className="text-gray-800 font-[500]">
            After completing the training, be prepared to explain the primary difference between{' '}
            <span className="font-[700]">Microsoft 365</span> and{' '}
            <span className="font-[700]">Office 365</span>.
          </p>
        </div>
      </Modulecard>

      <Modulecard title="Module 4: MS-700 Teams Administration Fundamentals" id="module4">
        <p className="font-[500]">
          <span className="font-[700]">Objective:</span> To gain a foundational understanding of
          Microsoft Teams administration, including the management of teams, channels, meetings, and
          collaboration features, aligned with the MS-700 certification path.
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Estimated Time to Complete:</span> 8 - 12 Hours
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Why This Matters:</span> As our central collaboration hub,
          Teams requires proper governance to be effective and secure. Volunteers with a deeper
          understanding of its structure can help manage channels, configure meeting policies, and
          troubleshoot issues, making our entire operation more efficient.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Recommended Training Resources
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 font-[500]">
          <li>
            <a
              href="https://support.microsoft.com/en-us/office/microsoft-teams-video-training-4f108e54-240b-4351-8084-b1089f0d21d7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Microsoft Teams Quick Start Video Training (Official)
            </a>{' '}
            - A quick, official overview of the essential features.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/training/paths/get-started-managing-microsoft-teams/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MS-700 Get started with managing Microsoft Teams - Training | Microsoft Learn
            </a>{' '}
            - The official entry-level learning path from Microsoft for Teams administration.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ms-700"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Official MS-700 Study Guide
            </a>{' '}
            - A detailed guide from Microsoft that outlines all exam objectives and is essential for
            understanding the core concepts.
          </li>
        </ul>

        {/* Blue Callout Box */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="font-[700] text-blue-900">A Note on Certification:</p>
          <p className="mt-2 text-blue-800 font-[500]">
            Only completing the learning paths above is required to start volunteering. However,
            funding for the official Microsoft certification exam may be provided on a case-by-case
            basis, depending on available funds and volunteer commitment.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Proficiency Task</h2>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="text-gray-800 font-[500]">
            After completing the training, be prepared to explain the difference between a{' '}
            <span className="font-[700]">standard</span>, a{' '}
            <span className="font-[700]">private</span>, and a{' '}
            <span className="font-[700]">shared channel</span> in Teams, and provide a use case for
            each.
          </p>
        </div>
      </Modulecard>

      <Modulecard title="Module 5: Microsoft OneDrive – Our Shared File System" id="module5">
        <p className="font-[500]">
          <span className="font-[700]">Objective:</span> To learn how to access, organize, and
          securely share documents within the FFC ecosystem.
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Estimated Time to Complete:</span> 2 Hours
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Why This Matters:</span> OneDrive is our single source of
          truth for all official documents, from SOPs to client-facing materials. Using OneDrive
          correctly prevents version control issues and ensures everyone is working from the most
          current information.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Recommended Training Resources
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 font-[500]">
          <li>
            <a
              href="https://support.microsoft.com/en-us/office/video-onedrive-basics-fe8aab1e-3d1a-4a65-a9b6-77b79b6dbb30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OneDrive Video Basics (Official)
            </a>{' '}
            - A short, visual introduction to the platform.
          </li>
          <li>
            <a
              href="https://adoption.microsoft.com/files/onedrive/Microsoft-OneDrive-quick-start-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OneDrive Quickstart Guide (PDF)
            </a>{' '}
            - A detailed guide you can save and reference later.
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/onedrive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OneDrive Help & Learning Center (Official)
            </a>{' '}
            - The main portal for all OneDrive documentation and tutorials.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Proficiency Task</h2>

        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-green-600 rounded-r-lg">
          <p className="text-gray-800 font-[500]">
            After completing the training, be prepared to describe the steps to share a file and
            grant <span className="font-[700]">“View Only”</span> permissions.
          </p>
        </div>
      </Modulecard>

      <Modulecard title="Module 6: Microsoft Planner – Task Management in Teams" id="module6">
        <p className="font-[500]">
          <span className="font-[700]">Objective:</span> To learn how to create, manage, and track
          tasks for individual and team projects using Microsoft Planner, both as a standalone app
          and within Microsoft Teams.
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Estimated Time to Complete:</span> 2 Hours
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Why This Matters:</span> Planner is our organization’s
          standard tool for task management. It provides clear visibility into project progress,
          clarifies responsibilities, and integrates directly into Teams, keeping all work-related
          communication and tasks in one place.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Recommended Training Resources
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 font-[500]">
          <li>
            <a
              href="https://support.microsoft.com/en-us/topic/4d7a18b3-3482-4226-bf93-3b3648a230d4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Microsoft Planner Video Training (Official)
            </a>{' '}
            - The best starting point from Microsoft for understanding Planner’s features.
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/topic/62798a9f-e827-49dd-8a27-dea23d32a470"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Use Planner in Microsoft Teams (Official Guide)
            </a>{' '}
            - A specific guide on how to add and use Planner as a tab in your Teams channels.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Proficiency Task</h2>

        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-green-600 rounded-r-lg">
          <p className="text-gray-800 font-[500]">
            After completing the training, be prepared to explain the difference between a{' '}
            <span className="font-[700]">“Bucket”</span> and a{' '}
            <span className="font-[700]">“Task”</span> in Planner and how they are used for
            organization.
          </p>
        </div>
      </Modulecard>

      <Modulecard title="Module 7: Microsoft 365 Apps Quick Start" id="module7">
        <p className="font-[500]">
          <span className="font-[700]">Objective:</span> To learn the basic functions of the core
          Microsoft 365 web apps for document creation (Word), data analysis (Excel), and
          presentations (PowerPoint).
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Estimated Time to Complete:</span> 6 - 8 Hours
        </p>

        <p className="mt-6 font-[500]">
          <span className="font-[700]">Why This Matters:</span> These applications are the universal
          standard for creating and sharing professional documents. A baseline proficiency is
          essential for nearly every volunteer role, from writing reports to creating client-facing
          presentations.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
          Recommended Training Resources
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 font-[500]">
          <li>
            <a
              href="https://support.microsoft.com/en-us#id0ebbh=web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Microsoft 365 Quick Starts (Official Hub)
            </a>{' '}
            - This single page provides access to the Quick Start guides for Word, Excel,
            PowerPoint, and more.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Proficiency Task</h2>

        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="text-gray-800 font-[500]">
            After completing the training, be prepared to explain how you would{' '}
            <span className="font-[700]">share a document</span> from any of the Microsoft 365 web
            apps.
          </p>
        </div>
      </Modulecard>
    </div>
  )
}

export default index
