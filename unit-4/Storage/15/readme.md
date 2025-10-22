<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </head>
  <body>
    <h3>Shopping cart</h3>
    <p>
      This is a multi-cart shopping application that can be used to cart the
      items.
    </p>
    <p>Here's the implementation details:</p>
    <ul>
      <li>
        After understanding the problem statement, designed the UI and the flow
        of the database.
      </li>
      <li>
        It's a multi-user app so we need to take username as input to assign
        them the dashboard. We need an input box to take username and button to
        validate. During validation we can need to check if the username is
        valid or not. If it's valid and unique then we save it to the database
        under users key. if not unique then we just login and fetch the user
        data associated with the username.
      </li>
      <li>
        Then there's two textviews one for to showcase the current executing
        task and second one to let user know logged in status.
      </li>
      <li>
        We need to add items in the cart. For this there're required inputs and
        a button to validate the input data. if all the inputs are valid then
        add the data in database inside username key. If invalid then prompt the
        error.
      </li>
      <li>
        We can edit the quantity of the item by clicking on edit icon. Also by
        tapping remove button , item gets removed from the user database
      </li>
      <li>
        Bottom end left, what is the total cost of all the products of current
        user, is shown.
      </li>
      <li>
        On the top right corner, there's an extra feture which lets user to save
        the current user so when we get back to the site again, the user gets
        logged in automatically and data gets displayed too.
      </li>
      <li>
        At any point if any other user logs in, current user gets changed and
        the data of the previous user gets cleared from the ui.
      </li>
    </ul>
  </body>
</html>
