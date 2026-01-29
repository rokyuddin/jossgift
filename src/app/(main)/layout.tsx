import { Footer } from '@/components/organisms/footer'
import { Navbar } from '@/components/organisms/navbar'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-col min-h-dvh">
            <Navbar />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}
