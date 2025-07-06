"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle2, 
  ArrowRight, 
  Home, 
  FileText, 
  Users, 
  ClipboardCheck,
  Building2,
  MapPin
} from "lucide-react"

const pathwaySteps = [
  {
    id: 1,
    title: "Determine Eligibility",
    description: "Check if you meet the criteria for SDA funding",
    icon: CheckCircle2,
    status: "active",
    details: [
      "Extreme functional impairment",
      "High support needs",
      "Current accommodation is inappropriate"
    ]
  },
  {
    id: 2,
    title: "Gather Evidence",
    description: "Collect documentation and assessments",
    icon: FileText,
    status: "upcoming",
    details: [
      "Medical reports",
      "Allied health assessments",
      "Current accommodation details"
    ]
  },
  {
    id: 3,
    title: "Housing Plan",
    description: "Develop your housing plan with professionals",
    icon: Home,
    status: "upcoming",
    details: [
      "Define housing preferences",
      "Identify support needs",
      "Location preferences"
    ]
  },
  {
    id: 4,
    title: "Submit Application",
    description: "Submit your SDA application to NDIS",
    icon: ClipboardCheck,
    status: "upcoming",
    details: [
      "Complete application form",
      "Attach all evidence",
      "Submit to NDIS"
    ]
  }
]

export function SdaPathwaySelector() {
  const [selectedStep, setSelectedStep] = useState(1)

  const handleStepClick = (stepId: number) => {
    setSelectedStep(stepId)
  }

  const selectedStepData = pathwaySteps.find(step => step.id === selectedStep)

  return (
    <section className="relative py-12 md:py-16 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your SDA Pathway Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through the key steps to secure your Specialist Disability Accommodation funding
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {pathwaySteps.map((step, index) => (
                <Card 
                  key={step.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedStep === step.id 
                      ? 'ring-2 ring-primary border-primary' 
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${
                        selectedStep === step.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            Step {step.id}
                          </Badge>
                          {step.status === 'active' && (
                            <Badge className="text-xs bg-green-100 text-green-800">
                              Start Here
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      {selectedStep === step.id && (
                        <ArrowRight className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Step Details */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              {selectedStepData && (
                <Card className="border-2 border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-primary text-primary-foreground">
                        <selectedStepData.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          Step {selectedStepData.id}
                        </Badge>
                        <CardTitle className="text-xl">{selectedStepData.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {selectedStepData.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Key Requirements
                      </h4>
                      <ul className="space-y-3">
                        {selectedStepData.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t space-y-3">
                      <Button className="w-full" size="lg">
                        Get Help with Step {selectedStepData.id}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <FileText className="h-4 w-4 mr-2" />
                        View Resources
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 