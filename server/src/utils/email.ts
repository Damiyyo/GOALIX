import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (
  email: string,
  token: string
) => {
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  await resend.emails.send({
    from: "Goalix <onboarding@resend.dev>",
    to: email,
    subject: "Reset your Goalix password",

    html: `
      <h2>Password Reset</h2>

      <p>You requested to reset your password.</p>

      <p>
        Click the link below:
      </p>

      <a href="${resetLink}">
        Reset Password
      </a>

      <p>This link expires in 15 minutes.</p>

      <p>If you didn't request this, ignore this email.</p>
    `,
  });
};