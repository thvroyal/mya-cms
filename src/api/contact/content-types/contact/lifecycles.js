module.exports = {
  async afterCreate(event) {
    const { params: { data = {} } } = event;

    try {
      await strapi.plugin('email').service('email').send({
        to: 'myainterior.cskh@gmail.com',
        from: 'myainterior.cskh@gmail.com',
        subject: 'My A Interior - New contact',
        html: `New request from user: <br /> <ul>
        <li><b>Name:</b> ${data.name}</li>
        <li><b>Email:</b> ${data.email}</li>
        <li><b>Phone Number:</b> ${data.phoneNumber}</li>
        <li><b>Message:</b> ${data.message}</li>
        </ul>`, 
          
      })
    } catch (error) {
      console.log(error);
    }
  }
}