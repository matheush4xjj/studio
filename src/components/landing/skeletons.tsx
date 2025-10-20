import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const SectionSkeleton = ({ children }: { children: React.ReactNode }) => (
  <section className="py-20 md:py-32">
    <div className="container px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
      </div>
      <div className="mt-16">{children}</div>
    </div>
  </section>
);

export function FeaturesSkeleton() {
  return (
    <SectionSkeleton>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="bg-card">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <Skeleton className="size-8 rounded-md" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="relative aspect-video w-full rounded-md mt-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionSkeleton>
  );
}

export function HowItWorksSkeleton() {
  return (
    <SectionSkeleton>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-card/60">
            <CardContent className="p-6 text-center">
              <Skeleton className="h-6 w-1/2 mx-auto" />
              <Skeleton className="relative aspect-video w-full rounded-md my-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionSkeleton>
  );
}

export function ProspectingSkeleton() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
          </div>
          <Skeleton className="relative aspect-video w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export function BenefitsSkeleton() {
  return (
    <SectionSkeleton>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-card/60">
            <CardHeader className="items-center">
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="h-6 w-3/4 mt-4" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionSkeleton>
  );
}

export function TestimonialsSkeleton() {
  return (
    <SectionSkeleton>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(2)].map((_, i) => (
          <Card key={i} className="bg-card/80 p-6">
            <CardContent className="p-0 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
            <div className="flex items-center gap-4 mt-6">
              <Skeleton className="size-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionSkeleton>
  );
}

export function PricingSkeleton() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        {/* Trial Skeleton */}
        <Card className="mb-24 bg-card/40 border-primary/20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12 space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-12 w-64 mt-4 rounded-md" />
            </div>
            <Skeleton className="relative w-full h-64 md:h-full min-h-[300px]" />
          </div>
        </Card>

        {/* Plans Skeleton */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Skeleton className="h-10 w-2/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="flex flex-col bg-card">
              <CardHeader className="p-6">
                <Skeleton className="h-7 w-1/2" />
                <Skeleton className="h-12 w-3/4 mt-4" />
                <Skeleton className="h-5 w-1/3 mt-2" />
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow space-y-4">
                <Skeleton className="h-px w-full" />
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Skeleton className="size-5 rounded-full" />
                    <Skeleton className="h-5 flex-1" />
                  </div>
                ))}
              </CardContent>
              <CardContent className="p-6 mt-auto">
                <Skeleton className="h-11 w-full rounded-md" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSkeleton() {
  return (
    <SectionSkeleton>
      <div className="max-w-3xl mx-auto space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-b">
            <div className="flex justify-between items-center py-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="size-4" />
            </div>
          </div>
        ))}
      </div>
    </SectionSkeleton>
  );
}
