"use client";

/**
 * @component SdaPathwaySelector
 * @description Interactive component for SDA pathway selection based on funding status
 * 
 * @example
 * ```tsx
 * <SdaPathwaySelector />
 * ```
 * 
 * @category Section
 * @usedIn SDA Pathways page
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SummitButton } from "@/components/ui/summit-button";
import { 
  Wallet, 
  ChevronRight, 
  FileText, 
  Users, 
  ArrowRightCircle,
  CheckCircle,
  HelpCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SdaPathwaySelectorProps {
  className?: string;
}

export function SdaPathwaySelector({ className }: SdaPathwaySelectorProps) {
  const [activeOption, setActiveOption] = useState<'yes' | 'no'>('yes');

  return (
    <section className={cn("relative py-12 md:py-16 bg-background", className)}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 relative">
          <span className="inline-block relative">
            Your SDA Pathway Journey
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 py-4 px-6 rounded-lg">
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-sm">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center sm:text-left sm:ml-3">Do you have SDA funding?</h3>
          </div>

          <div className="relative drop-shadow-lg">
            {/* Tab Headers */}
            <div className="flex">
              <button
                onClick={() => setActiveOption('yes')}
                className={cn(
                  "w-1/2 py-6 px-4 flex flex-col items-center rounded-t-xl transition-all duration-300 border-t border-l border-r",
                  activeOption === 'yes' 
                    ? "bg-gradient-to-br from-primary/90 to-primary/70 text-white border-primary shadow-[0_-4px_10px_rgba(0,0,0,0.05)]" 
                    : "bg-gradient-to-br from-primary/20 to-primary/5 text-foreground hover:from-primary/30 hover:to-primary/10 border-muted"
                )}
              >
                <div className="flex items-center mb-1">
                  <CheckCircle className={cn(
                    "mr-2 h-5 w-5 transition-opacity",
                    activeOption === 'yes' ? "opacity-100" : "opacity-70"
                  )} />
                  <span className="font-semibold text-lg">Yes</span>
                </div>
                <span className="text-sm opacity-90">I have SDA funding</span>
              </button>
              
              <button
                onClick={() => setActiveOption('no')}
                className={cn(
                  "w-1/2 py-6 px-4 flex flex-col items-center rounded-t-xl transition-all duration-300 border-t border-l border-r",
                  activeOption === 'no' 
                    ? "bg-gradient-to-br from-secondary/90 to-secondary/70 text-white border-secondary shadow-[0_-4px_10px_rgba(0,0,0,0.05)]" 
                    : "bg-gradient-to-br from-secondary/20 to-secondary/5 text-foreground hover:from-secondary/30 hover:to-secondary/10 border-muted"
                )}
              >
                <div className="flex items-center mb-1">
                  <HelpCircle className={cn(
                    "mr-2 h-5 w-5 transition-opacity",
                    activeOption === 'no' ? "opacity-100" : "opacity-70"
                  )} />
                  <span className="font-semibold text-lg">No</span>
                </div>
                <span className="text-sm opacity-90">I need SDA funding</span>
              </button>
            </div>
            
            {/* Content Area */}
            <Card className={cn(
              "relative overflow-hidden border-t-0 rounded-t-none shadow-lg",
              activeOption === 'yes' ? "border-primary/50" : "border-secondary/50"
            )}>
              <CardContent className="p-6 sm:p-8">
                <div className="min-h-[350px] md:min-h-[400px] transition-all duration-300">
                  {activeOption === 'yes' && (
                    <div className="animate-fadeIn space-y-6">
                      <h4 className="text-xl font-semibold text-center text-primary mb-6">You're Ready to Find Your Home!</h4>
                      
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            With your SDA funding approval, you're ready to explore suitable housing options that match your needs and preferences.
                          </p>
                          
                          <div className="space-y-3">
                            <h5 className="font-medium">Next steps:</h5>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Browse our available SDA properties</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Arrange property inspections</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Complete tenancy application</span>
                              </li>
                            </ul>
                          </div>
                          
                          <Link href="/services/sda-vacancies">
                            <SummitButton className="mt-4 w-full sm:w-auto">
                              View Available Properties
                              <ArrowRightCircle className="ml-2 h-4 w-4" />
                            </SummitButton>
                          </Link>
                        </div>
                        
                        <div className="relative h-64 w-full rounded-lg overflow-hidden border border-muted group shadow-md">
                          <Image 
                            src="/52.webp" 
                            alt="SDA Housing Example" 
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeOption === 'no' && (
                    <div className="animate-fadeIn space-y-8">
                      <h4 className="text-xl font-semibold text-center text-secondary mb-6">Let's Get You Started With Funding</h4>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <Card className="overflow-hidden hover:border-secondary transition-colors shadow-sm hover:shadow-md">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-full bg-secondary/10">
                                <FileText className="h-6 w-6 text-secondary" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold mb-2">Required Documents</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Allied Health Assessment</li>
                                  <li>• Housing Plan</li>
                                  <li>• Housing Preferences</li>
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="overflow-hidden hover:border-secondary transition-colors shadow-sm hover:shadow-md">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-full bg-accent/10">
                                <Users className="h-6 w-6 text-accent" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold mb-2">Who Can Help</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Allied Health Professionals</li>
                                  <li>• SDA Provider</li>
                                  <li>• Housing Support Coordinator</li>
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          To qualify for SDA, you must be able to demonstrate extreme functional impairment or high support needs, and provide evidence to support SDA criteria.
                        </p>
                      </div>
                      
                      <div className="flex justify-center">
                        <Link href="/resources/sda-eligibility">
                          <SummitButton variant="secondary" className="mt-2">
                            Check Your Eligibility
                            <ArrowRightCircle className="ml-2 h-4 w-4" />
                          </SummitButton>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 