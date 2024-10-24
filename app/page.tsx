import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Search, Users2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
          Connect with Top Talent and Opportunities
        </h1>
        <p className="text-xl text-muted-foreground max-w-[750px] mb-8">
          TalentBridge brings together exceptional candidates and leading companies. 
          Whether you're hiring or seeking your next role, we make the process seamless.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/register?type=recruiter">I'm a Recruiter</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/register?type=candidate">I'm a Candidate</Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Smart Search</h3>
            <p className="text-muted-foreground">
              Find the perfect match with our advanced search algorithms and filters.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Talent Pool</h3>
            <p className="text-muted-foreground">
              Access a diverse pool of qualified candidates across various industries.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Company Profiles</h3>
            <p className="text-muted-foreground">
              Showcase your company culture and connect with potential employees.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of companies and professionals already using TalentBridge
        </p>
        <Button asChild size="lg">
          <Link href="/register">Create Account</Link>
        </Button>
      </div>
    </div>
  )
}