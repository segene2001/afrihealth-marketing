'use client';

import { Shield, Smartphone, BarChart3, Bell, Globe, Users, CheckCircle, ArrowRight, MapPin, Activity, Database, Lock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">AfriHealth Sentinel</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600">How It Works</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600">Contact</a>
            </div>
            <Link href="https://sentinel.afrihealth.io" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 transition">
              Launch Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-bg hero-pattern pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm mb-6">
              <Globe className="h-4 w-4" /> Protecting Sub-Saharan Africa
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Real-Time Disease Surveillance for Africa
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Empowering health workers with mobile-first tools for rapid outbreak detection and real-time reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://sentinel.afrihealth.io" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-primary-600 font-semibold hover:bg-primary-50 transition">
                Access Dashboard <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white/10 transition">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '36+', label: 'States Covered' },
              { value: '500+', label: 'Health Facilities' },
              { value: '10K+', label: 'Cases Tracked' },
              { value: '< 10min', label: 'Alert Response' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Surveillance Platform</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need for effective disease surveillance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: 'Mobile-First Reporting', desc: 'Offline-capable mobile app for community health workers.' },
              { icon: Bell, title: 'Smart Alert Detection', desc: 'AI-powered outbreak detection using threshold and clustering.' },
              { icon: BarChart3, title: 'Real-Time Dashboard', desc: 'Interactive maps and analytics for public health officials.' },
              { icon: Database, title: 'DHIS2 Integration', desc: 'Seamless export to national health information systems.' },
              { icon: Users, title: 'Role-Based Access', desc: 'Secure access for workers, facilities, and officers.' },
              { icon: Lock, title: 'Enterprise Security', desc: 'End-to-end encryption and audit logging.' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Report', desc: 'Health workers report cases via mobile app.' },
              { step: '2', title: 'Sync', desc: 'Data syncs automatically when connected.' },
              { step: '3', title: 'Detect', desc: 'AI detects potential outbreaks in real-time.' },
              { step: '4', title: 'Respond', desc: 'Officials receive alerts and coordinate response.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 gradient-bg text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Disease Surveillance?</h2>
          <p className="text-xl text-primary-100 mb-8">Join health ministries across Africa using AfriHealth Sentinel.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@afrihealth.io" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-primary-600 font-semibold hover:bg-primary-50 transition">
              Contact Us <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">AfriHealth Sentinel</span>
          </div>
          <p className="text-sm mb-4">Real-time disease surveillance for Sub-Saharan Africa.</p>
          <p className="text-sm">contact@afrihealth.io | support@afrihealth.io</p>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AfriHealth Sentinel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
