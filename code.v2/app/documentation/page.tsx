import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-foreground">System Documentation</h1>

        <div className="space-y-12">
          {/* Site Map Section */}
          <section className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Site Map - Page Structure</h2>
            <div className="bg-muted/30 p-6 rounded-lg overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Main Page */}
                <div className="flex flex-col items-center mb-8">
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold border-2 border-primary">
                    Main Page (Role Selection)
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                </div>

                {/* Two Main Branches */}
                <div className="flex justify-center gap-32">
                  {/* Employee Branch */}
                  <div className="flex flex-col items-center">
                    <div className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold border border-border min-w-[280px] text-center">
                      Employee Module
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-card border border-border rounded-lg p-4 min-w-[280px]">
                      <h3 className="font-semibold mb-3 text-card-foreground">Employee Dashboard</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Dashboard Overview</li>
                        <li>• Quick Statistics</li>
                        <li>• Create New Request</li>
                        <li>• My Requests List</li>
                        <li>• Filter by Status</li>
                      </ul>
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="flex gap-8">
                      <div className="flex flex-col items-center">
                        <div className="bg-card border border-border rounded-lg p-4 min-w-[130px]">
                          <h4 className="font-semibold mb-2 text-sm text-card-foreground">Request Form</h4>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            <li>• Amount</li>
                            <li>• Category</li>
                            <li>• Description</li>
                            <li>• Date</li>
                            <li>• Attachments</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-card border border-border rounded-lg p-4 min-w-[130px]">
                          <h4 className="font-semibold mb-2 text-sm text-card-foreground">Request Details</h4>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            <li>• Full Info</li>
                            <li>• Status</li>
                            <li>• Reviewer</li>
                            <li>• Comments</li>
                            <li>• Timeline</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Management Branch */}
                  <div className="flex flex-col items-center">
                    <div className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold border border-border min-w-[280px] text-center">
                      Management Module
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-card border border-border rounded-lg p-4 min-w-[280px]">
                      <h3 className="font-semibold mb-3 text-card-foreground">Management Dashboard</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Statistics Overview</li>
                        <li>• Pending Approvals</li>
                        <li>• All Requests View</li>
                        <li>• Review History</li>
                        <li>• Financial Reports</li>
                      </ul>
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="flex gap-8">
                      <div className="flex flex-col items-center">
                        <div className="bg-card border border-border rounded-lg p-4 min-w-[130px]">
                          <h4 className="font-semibold mb-2 text-sm text-card-foreground">Approval Panel</h4>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            <li>• Review Details</li>
                            <li>• Approve/Reject</li>
                            <li>• Add Comments</li>
                            <li>• Set Priority</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-card border border-border rounded-lg p-4 min-w-[130px]">
                          <h4 className="font-semibold mb-2 text-sm text-card-foreground">Financial Reports</h4>
                          <ul className="space-y-1 text-xs text-muted-foreground">
                            <li>• Budget Overview</li>
                            <li>• By Category</li>
                            <li>• Trends Chart</li>
                            <li>• Top Expenses</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Journey Section */}
          <section className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground">User Journey Flowcharts</h2>

            {/* Employee Journey */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Employee Journey - Creating Expense Request
              </h3>
              <div className="bg-muted/30 p-6 rounded-lg overflow-x-auto">
                <div className="flex items-center gap-4 min-w-[1000px]">
                  {/* Start */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-xs text-center font-semibold text-primary">Navigate to Employee</span>
                    </div>
                  </div>

                  <div className="text-muted-foreground">→</div>

                  {/* Dashboard */}
                  <div className="flex flex-col items-center">
                    <div className="px-4 py-3 border-2 border-border rounded-lg bg-card min-w-[120px] text-center">
                      <span className="text-sm font-medium text-card-foreground">View Dashboard</span>
                    </div>
                  </div>

                  <div className="text-muted-foreground">→</div>

                  {/* Form */}
                  <div className="flex flex-col items-center">
                    <div className="px-4 py-3 border-2 border-border rounded-lg bg-card min-w-[120px] text-center">
                      <span className="text-sm font-medium text-card-foreground">Fill Request Form</span>
                    </div>
                  </div>

                  <div className="text-muted-foreground">→</div>

                  {/* Validation Decision */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-32 h-32 bg-accent/20 border-2 border-accent rotate-45 flex items-center justify-center">
                      <span className="text-xs text-center font-semibold -rotate-45 text-accent-foreground">
                        Valid Data?
                      </span>
                    </div>
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="text-destructive text-sm">✗ No</div>
                      <div className="text-muted-foreground">↓</div>
                      <div className="px-3 py-2 border border-destructive rounded bg-destructive/10 text-xs text-center">
                        <span className="text-destructive">Show Errors</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="text-success text-sm">✓ Yes</div>
                    <div className="text-muted-foreground">→</div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col items-center">
                    <div className="px-4 py-3 border-2 border-success rounded-lg bg-success/10 min-w-[120px] text-center">
                      <span className="text-sm font-medium text-success">Submit Request</span>
                    </div>
                  </div>

                  <div className="text-muted-foreground">→</div>

                  {/* Track */}
                  <div className="flex flex-col items-center">
                    <div className="px-4 py-3 border-2 border-border rounded-lg bg-card min-w-[120px] text-center">
                      <span className="text-sm font-medium text-card-foreground">Track Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Management Journey */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Management Journey - Reviewing Requests
              </h3>
              <div className="bg-muted/30 p-6 rounded-lg overflow-x-auto">
                <div className="min-w-[1000px]">
                  <div className="flex items-center gap-4 mb-8">
                    {/* Start */}
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <span className="text-xs text-center font-semibold text-primary">Navigate to Management</span>
                      </div>
                    </div>

                    <div className="text-muted-foreground">→</div>

                    {/* Dashboard */}
                    <div className="flex flex-col items-center">
                      <div className="px-4 py-3 border-2 border-border rounded-lg bg-card min-w-[120px] text-center">
                        <span className="text-sm font-medium text-card-foreground">View Dashboard & Stats</span>
                      </div>
                    </div>

                    <div className="text-muted-foreground">→</div>

                    {/* Pending */}
                    <div className="flex flex-col items-center">
                      <div className="px-4 py-3 border-2 border-border rounded-lg bg-card min-w-[120px] text-center">
                        <span className="text-sm font-medium text-card-foreground">View Pending Requests</span>
                      </div>
                    </div>

                    <div className="text-muted-foreground">→</div>

                    {/* Select */}
                    <div className="flex flex-col items-center">
                      <div className="px-4 py-3 border-2 border-border rounded-lg bg-card min-w-[140px] text-center">
                        <span className="text-sm font-medium text-card-foreground">Select Request</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-1"></div>
                    <div className="text-muted-foreground">↓</div>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex-1"></div>

                    {/* Review */}
                    <div className="flex flex-col items-center">
                      <div className="px-4 py-3 border-2 border-border rounded-lg bg-card min-w-[140px] text-center">
                        <span className="text-sm font-medium text-card-foreground">Review Details & Documents</span>
                      </div>
                    </div>

                    <div className="text-muted-foreground">→</div>

                    {/* Decision */}
                    <div className="flex flex-col items-center relative">
                      <div className="w-32 h-32 bg-accent/20 border-2 border-accent rotate-45 flex items-center justify-center">
                        <span className="text-xs text-center font-semibold -rotate-45 text-accent-foreground">
                          Approve?
                        </span>
                      </div>

                      {/* Reject Path */}
                      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="text-destructive text-sm">✗ Reject</div>
                        <div className="text-muted-foreground">↓</div>
                        <div className="px-3 py-2 border-2 border-destructive rounded-lg bg-destructive/10 text-center min-w-[100px]">
                          <span className="text-sm font-medium text-destructive">Add Rejection Reason</span>
                        </div>
                        <div className="text-muted-foreground">↓</div>
                        <div className="px-3 py-2 border-2 border-border rounded-lg bg-card text-center min-w-[100px]">
                          <span className="text-xs text-muted-foreground">Update Status</span>
                        </div>
                      </div>
                    </div>

                    {/* Approve Path */}
                    <div className="flex flex-col items-center">
                      <div className="text-success text-sm">✓ Approve</div>
                      <div className="text-muted-foreground">→</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="px-4 py-3 border-2 border-success rounded-lg bg-success/10 min-w-[120px] text-center">
                        <span className="text-sm font-medium text-success">Add Comments</span>
                      </div>
                    </div>

                    <div className="text-muted-foreground">→</div>

                    <div className="flex flex-col items-center">
                      <div className="px-4 py-3 border-2 border-success rounded-lg bg-success/10 min-w-[120px] text-center">
                        <span className="text-sm font-medium text-success">Confirm Approval</span>
                      </div>
                    </div>

                    <div className="text-muted-foreground">→</div>

                    {/* Notify */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-success/20 border-2 border-success flex items-center justify-center">
                        <span className="text-xs text-center font-semibold text-success">Notify Employee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Features */}
          <section className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Key System Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-card-foreground">Employee Module</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Create and submit expense requests</li>
                  <li>• Upload supporting documents</li>
                  <li>• Track request status in real-time</li>
                  <li>• View approval history</li>
                  <li>• Filter requests by status</li>
                  <li>• View detailed request information</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-card-foreground">Management Module</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dashboard with key statistics</li>
                  <li>• Approve or reject expense requests</li>
                  <li>• Add comments and feedback</li>
                  <li>• View all requests and review history</li>
                  <li>• Financial reports and analytics</li>
                  <li>• Budget tracking by category</li>
                  <li>• Expense trends visualization</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
