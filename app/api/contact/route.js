import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields required" }),
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    })

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    )

  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ success: false, message: "Email failed" }),
      { status: 500 }
    )
  }
}
