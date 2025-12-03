import HeroSection from "@/components/UI/HeroSection";
import HelpForCharitiesandNonprofit from "@/components/501c3-components/Help-For-Charities-and-Nonprofit";
import ReadyToGetStartedAndFaq from "@/components/501c3-components/Ready-to-get-started-and-faqs";
import CallSection from "@/components/help-for-charities-components/call-section";

const page = () => {
  return (
    <div>
      <HeroSection
        heading="501(c)3 Onboarding Guide"
        paragraph="If you are representing a charity or you currently work for a charity and want to improve your own skills start here to get help for your organization. You get instant access to many of our free tools and products right away!"
        heroImg="/Images/volunteer.png"
      />
      <HelpForCharitiesandNonprofit />
      <ReadyToGetStartedAndFaq />
      <CallSection />
    </div>
  );
};

export default page;
