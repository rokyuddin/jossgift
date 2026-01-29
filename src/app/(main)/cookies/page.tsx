import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | JossGift",
    description: "Learn about how we use cookies to improve your experience on JossGift.",
};

export default function CookiePolicyPage() {
    return (
        <LegalPageLayout title="Cookie Policy" lastUpdated="January 29, 2026">
            <LegalSection title="1. What Are Cookies?">
                <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit
                    a website. They are widely used to make websites work more efficiently, as well as to provide
                    reporting information and assist with personalization.
                </p>
            </LegalSection>

            <LegalSection title="2. Why We Use Cookies">
                <p>We use cookies for several reasons, including:</p>
                <ul className="space-y-2 pl-6 list-disc">
                    <li>To help keep your account secure during your session.</li>
                    <li>To remember your preferences and settings (e.g., language, items in cart).</li>
                    <li>To analyze how users interact with our website so we can improve the experience.</li>
                    <li>To serve relevant advertisements to you on other platforms.</li>
                </ul>
            </LegalSection>

            <LegalSection title="3. Types of Cookies We Use">
                <div className="space-y-6">
                    <div>
                        <h3 className="mb-2 font-medium text-foreground text-xl">Essential Cookies</h3>
                        <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 font-medium text-foreground text-xl">Performance & Analytics Cookies</h3>
                        <p>These cookies are used to collect information about how visitors use our website. We use the information to compile reports and to help us improve the site.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 font-medium text-foreground text-xl">Functionality Cookies</h3>
                        <p>These cookies allow our website to remember choices you make and provide enhanced, more personal features.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 font-medium text-foreground text-xl">Targeting & Advertising Cookies</h3>
                        <p>These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement.</p>
                    </div>
                </div>
            </LegalSection>

            <LegalSection title="4. How to Manage Cookies">
                <p>
                    You can set or amend your web browser controls to accept or refuse cookies. If you choose to
                    reject cookies, you may still use our website though your access to some functionality and areas
                    of our website may be restricted.
                </p>
                <p>
                    Most web browsers allow you to manage cookie preferences through their settings. You can usually
                    find these settings in the 'Options' or 'Preferences' menu of your browser.
                </p>
            </LegalSection>

            <LegalSection title="5. Updates to This Policy">
                <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes
                    to the cookies we use or for other operational, legal, or regulatory reasons.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
