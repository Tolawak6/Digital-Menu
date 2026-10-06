import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  Info,
  Share2,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { OrnamentalDivider } from './MenuMotifs';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 sm:py-20 bg-[#252321] border-t border-[#D6B477]/20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D6B477]">
            Visit or Reach Out
          </span>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-[#F1E6D2] mt-1"
          >
            Location, Hours &amp; Contact
          </h2>
          <OrnamentalDivider className="my-3" />
          <p className="text-sm sm:text-base text-[#BDB3A5]">
            Stop by for fresh Ethiopian coffee, pastries, juices, and warm meals
            in {siteConfig.contact.city}, or message us on WhatsApp.
          </p>
        </div>

        {/* Owner Editable Configuration Notice */}
        {siteConfig.isContactPlaceholder && (
          <div className="mb-8 rounded-md bg-[#332D27]/90 border border-[#D6B477]/35 p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#D6B477] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#BDB3A5] leading-relaxed">
              <strong className="text-[#F1E6D2] font-semibold">
                Owner Configuration Note:{' '}
              </strong>
              {siteConfig.ownerConfigNotice}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Location & Address */}
          <div className="rounded-md bg-[#332D27] border border-[#D6B477]/20 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-[#252321] border border-[#D6B477]/35 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#D6B477]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#F1E6D2]">
                  Our Location
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#D6B477] mt-0.5">
                  {siteConfig.contact.city}, {siteConfig.contact.country}
                </p>
              </div>
              <div className="space-y-1.5 text-sm text-[#BDB3A5]">
                <p className="text-[#F1E6D2] font-medium">
                  {siteConfig.contact.addressLine1}
                </p>
                <p>{siteConfig.contact.addressLine2}</p>
                <p className="text-xs text-[#BDB3A5]/80 pt-1">
                  {siteConfig.contact.landmarkNote}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D6B477]/15">
              <span className="inline-block text-xs text-[#D6B477]">
                Dine-in &bull; Takeaway &bull; Table QR Menu
              </span>
            </div>
          </div>

          {/* Card 2: Telephone, Email & WhatsApp */}
          <div className="rounded-md bg-[#332D27] border border-[#D6B477]/20 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-[#252321] border border-[#D6B477]/35 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#D6B477]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#F1E6D2]">
                  Phone &amp; WhatsApp
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#D6B477] mt-0.5">
                  Direct Customer Line
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="block text-xs text-[#BDB3A5]">Telephone:</span>
                  <a
                    href={`tel:${siteConfig.contact.phoneHref}`}
                    className="font-medium text-[#F1E6D2] hover:text-[#D6B477] transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>

                <div>
                  <span className="block text-xs text-[#BDB3A5]">Email:</span>
                  <span className="text-[#F1E6D2]/90">
                    {siteConfig.contact.emailDisplay}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="flex items-center gap-1.5 text-xs text-[#BDB3A5] mb-1">
                    <Share2 className="w-3.5 h-3.5 text-[#D6B477]" />
                    Social Media Placeholders:
                  </span>
                  <p className="text-xs text-[#BDB3A5]">
                    Instagram: {siteConfig.socials.instagram}
                  </p>
                  <p className="text-xs text-[#BDB3A5]">
                    Telegram: {siteConfig.socials.telegram}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D6B477]/15 flex flex-col sm:flex-row gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs sm:text-sm font-semibold bg-[#D6B477] text-[#252321] hover:bg-[#E5CA97] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.emailDisplay.split(' ')[0]}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded text-xs font-medium bg-[#252321] text-[#F1E6D2] hover:text-[#D6B477] border border-[#D6B477]/25 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D6B477]" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Opening Hours */}
          <div className="rounded-md bg-[#332D27] border border-[#D6B477]/20 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-[#252321] border border-[#D6B477]/35 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#D6B477]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#F1E6D2]">
                  Opening Hours
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#D6B477] mt-0.5">
                  East Africa Time (EAT)
                </p>
              </div>

              <div className="divide-y divide-[#D6B477]/15">
                {siteConfig.openingHours.map((entry) => (
                  <div key={entry.days} className="py-2.5 first:pt-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-medium text-[#F1E6D2]">
                        {entry.days}
                      </span>
                    </div>
                    <p className="text-xs text-[#D6B477] font-medium mt-0.5">
                      {entry.hours}
                    </p>
                    {entry.note && (
                      <p className="text-[11px] text-[#BDB3A5] mt-0.5">
                        {entry.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D6B477]/15">
              <span className="text-xs text-[#BDB3A5]">
                Editable in <code className="text-[#D6B477]">src/data/siteConfig.ts</code>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
