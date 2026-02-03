"use client";

import React from 'react';
import { Mail, MapPin, Phone, Clock, Send, Gift, Building2 } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Textarea } from '@/components/atoms/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/atoms/select';
import { Label } from '@/components/atoms/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/atoms/card';
import { Separator } from '@/components/atoms/separator';
import { InView } from '@/components/atoms/in-view';
import { Container } from '@/components/molecules/container';

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20 w-full min-h-screen">
            <Container className="px-4">
                <InView stagger className="space-y-16">
                    {/* Header Section */}
                    <div className="space-y-4 mx-auto max-w-2xl text-center">
                        <InView.Item direction="down" as="h1" className="font-bold text-foreground text-4xl md:text-5xl tracking-tight">
                            Get in Touch
                        </InView.Item>
                        <InView.Item direction="down" as="p" className="text-muted-foreground text-lg leading-relaxed">
                            Have a sweet idea? We'd love to hear from you. Whether it's a custom box for a special someone or a corporate order for your entire team.
                        </InView.Item>
                    </div>

                    <div className="gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
                        {/* Contact/Order Form */}
                        <InView.Item direction="right" className="space-y-8">
                            <Card className="bg-card/50 shadow-sm border-border/50">
                                <CardHeader>
                                    <CardTitle>Order Your Desire Box</CardTitle>
                                    <CardDescription>
                                        Tell us what you're craving. We'll craft the perfect chocolate experience for you.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First name</Label>
                                                <Input id="firstName" placeholder="Jane" className="rounded-xl h-12" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last name</Label>
                                                <Input id="lastName" placeholder="Doe" className="rounded-xl h-12" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="jane@example.com" className="rounded-xl h-12" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone (optional)</Label>
                                            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-xl h-12" />
                                        </div>

                                        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="inquiry-type">Inquiry Type</Label>
                                                <Select>
                                                    <SelectTrigger id="inquiry-type" className="rounded-xl h-12">
                                                        <SelectValue placeholder="Select type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="custom">Custom Box</SelectItem>
                                                        <SelectItem value="corporate">Corporate Gift</SelectItem>
                                                        <SelectItem value="wedding">Wedding / Events</SelectItem>
                                                        <SelectItem value="general">General Inquiry</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="budget">Budget (approx)</Label>
                                                <Select>
                                                    <SelectTrigger id="budget" className="rounded-xl h-12">
                                                        <SelectValue placeholder="Select range" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="50-100">$50 - $100</SelectItem>
                                                        <SelectItem value="100-500">$100 - $500</SelectItem>
                                                        <SelectItem value="500+">$500+</SelectItem>
                                                        <SelectItem value="corporate-bulk">Corporate Bulk</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Your Vision</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us about the flavors, themes, or specific chocolates you'd like to include..."
                                                className="rounded-xl min-h-[150px] resize-none"
                                            />
                                        </div>

                                        <Button className="rounded-xl w-full h-12 font-medium text-base" size="lg">
                                            <Send className="mr-2 w-4 h-4" /> Send Request
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </InView.Item>

                        {/* Corporate & Info Section */}
                        <InView.Item direction="left" className="space-y-8">
                            {/* Corporate Office Info */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-2xl tracking-tight">Corporate Office</h3>
                                    <p className="text-muted-foreground">
                                        For partnerships, wholesale inquiries, and visiting our headquarters.
                                    </p>
                                </div>

                                <Card className="overflow-hidden">
                                    <div className="relative bg-muted/50 h-48">
                                        {/* Abstract Map Placeholder or Image */}
                                        <div className="absolute inset-0 flex justify-center items-center text-muted-foreground/20">
                                            <Building2 className="w-16 h-16" />
                                        </div>
                                    </div>
                                    <CardContent className="space-y-6 pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10 text-primary shrink-0">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Headquarters</h4>
                                                <p className="mt-1 text-muted-foreground">
                                                    123 Cocoa Boulevard, Suite 100<br />
                                                    San Francisco, CA 94107
                                                </p>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="flex items-start gap-4">
                                            <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10 text-primary shrink-0">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Email Us</h4>
                                                <p className="mt-1 text-muted-foreground">
                                                    corporate@jossgift.com<br />
                                                    support@jossgift.com
                                                </p>
                                            </div>
                                        </div>

                                        <Separator />

                                        <div className="flex items-start gap-4">
                                            <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10 text-primary shrink-0">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Call Us</h4>
                                                <p className="mt-1 text-muted-foreground">
                                                    +1 (555) 123-4567<br />
                                                    <span className="text-muted-foreground/60 text-sm">Mon-Fri, 9am - 6pm PST</span>
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Why Choose JossGift for Corporate? */}
                            <div className="space-y-4 bg-primary/5 p-8 border border-primary/10 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <Gift className="w-6 h-6 text-primary" />
                                    <h3 className="font-semibold text-xl">Corporate Gifting</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Elevate your business relationships with our premium chocolate selections. We offer:
                                </p>
                                <ul className="space-y-2 text-foreground/80 text-sm">
                                    <li className="flex items-center gap-2">
                                        <div className="bg-primary rounded-full w-1.5 h-1.5" />
                                        Custom branding and packaging options
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="bg-primary rounded-full w-1.5 h-1.5" />
                                        Volume discounts for bulk orders
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="bg-primary rounded-full w-1.5 h-1.5" />
                                        Dedicated account manager
                                    </li>
                                </ul>
                                <Button variant="outline" className="bg-background mt-4 border-primary/20 hover:border-primary/50 w-full text-foreground">
                                    Download Corporate Catalog
                                </Button>
                            </div>
                        </InView.Item>
                    </div>
                </InView>
            </Container>
        </div>
    );
}
