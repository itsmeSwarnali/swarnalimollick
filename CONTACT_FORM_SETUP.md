# Contact form setup
1. Create a Formspree form using swarnalimollick@gmail.com and verify the email.
2. In Vercel: Project → Settings → Environment Variables.
3. Add `FORMSPREE_ENDPOINT` with your full endpoint, for example `https://formspree.io/f/abcdwxyz`.
4. Apply it to Production, Preview and Development, then redeploy.
5. Test the form from another email address. The visitor's email is sent as the reply-to address.
