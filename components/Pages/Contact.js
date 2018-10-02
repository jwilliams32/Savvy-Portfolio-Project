export default function Contact(){
    return `
        <form action="https://formspree.io/jeffreywilliams.b@gmail.com" method="POST" id="container">
        <div class="form-group">
        <input class="form-control" type="text" name="firstname" placeholder="First Name"  size="50" autofocus>
        </div>
        <div class="form-group">
        <input class="form-control" type="text" name="lastname" placeholder="Last Name" size="50" >
        </div>
        <br>
        <div class="form-group">
        <input class="form-control" type="email" name="userEmail" placeholder="your.email@example.com" size="50">
        </div>
        <div>
        <p>What's your message about?</p>
        </div>

        <label for="subject">
        <select class="form-group" name="subject">
            <optgroup label="Message">
            <option value="hire">Hiring Me</option>
            <option value="website">Creating a Website</option>
            <option value="pricing">Pricing</option>
            <option value="question">Question</option>
            </optgroup>
        </select>
        </div>

        </label>

        <div class="form-group text-center">

        <textarea name="user_message" placeholder="Dear Jeffrey Williams,"rows="8" cols="40"></textarea>
        <br>
        <input type="submit" class="button-black button-large">

        </div>

        </form>


    `;
}