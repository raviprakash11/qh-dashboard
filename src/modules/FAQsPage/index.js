import React from "react";
import "./FAQsPage.scss";

export default function FAQsPage() {
  return (
    <div className="AMPLC">
      <div className="AMPLCMp">
        <div className="AMPLCMph">Frequently Asked Questions</div>
        <div className="AMPLCp">
          Welcome to the FAQ section of{" "}
          <span style={{ fontWeight: "600" }}>QH-Dashboard</span>. We've
          compiled answers to common queries to provide you with quick
          assistance and clarity. If you don't find the answer you're looking
          for here, please feel free to contact our support team.
        </div>
        <div className="AMPLCp">
          <ol>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              What is QH-Dashboard?
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                QH-Dashboard is a powerful platform designed to "brief
                description of the main purpose or features of the app". It's
                tailored to meet the needs of "your target audience", helping
                them "highlight the benefits or problems your app solves".
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              How do I get started?
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                Getting started is easy! Simply "brief step-by-step instructions
                on signing up or creating an account". Once you're in, you can
                explore our intuitive dashboard and its features to begin
                "describe what users can accomplish using the dashboard".
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              Is my data secure?
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                Absolutely. We take data security seriously. QH-Dashboard
                employs state-of-the-art encryption and security measures to
                ensure your data remains safe and confidential. You can trust us
                to protect your information.
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              Can I customize the dashboard?
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                Yes, you can! Our dashboard is designed with customization in
                mind. Tailor the layout, widgets, and data visualizations to
                match your preferences and needs. It's all about making the
                dashboard work for you.
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              How often is the data updated?{" "}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                The data in your dashboard is updated in real-time. You'll
                always have access to the latest insights and analytics,
                ensuring you make informed decisions based on current
                information.
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              What if I need help or support?{" "}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                We're here to assist you. If you have any questions, concerns,
                or need technical support, our dedicated support team is
                available "mention support hours or availability". You can reach
                us through "provide contact details or link to support page".
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              Is QH-Dashboard mobile-friendly?{" "}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                Absolutely. Our web app is optimized for mobile devices,
                ensuring you can access your dashboard and stay connected no
                matter where you are.
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              Can I collaborate with my team using the dashboard?{" "}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                Yes, collaboration is a key feature of QH-Dashboard. You
                can easily share insights and collaborate with your team
                members, promoting transparency and efficient communication.
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              Are there different pricing plans available?{" "}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                Yes, we offer different pricing plans to suit various needs.
                Visit our Pricing page "link to pricing page" to explore the
                available options and choose the one that aligns with your
                requirements.
              </div>
            </li>
            <li style={{ fontSize: "18px", fontWeight: "600" }}>
              How do I cancel my subscription?{" "}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "100",
                  padding: "14px 20px",
                }}
              >
                Cancelling your subscription is simple. You can do so by
                "provide instructions on how to cancel, whether it's through the
                dashboard or by contacting support".
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
