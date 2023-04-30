<template>
     <h1>Hello World, I am using Bootstrap</h1>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark text-nowarp">Dark</button>

    <br />
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark text-nowarp">Dark</button>

    <br />
    <br />
    <br />

    <button type="button" class="btn btn-primary btn-lg" disabled>
      Primary
    </button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>
      Secondary
    </button>
    <button type="button" class="btn btn-success btn-lg" disabled>
      Success
    </button>
    <button type="button" class="btn btn-danger btn-lg">Danger</button>
    <button type="button" class="btn btn-warning btn-lg">Warning</button>
    <button type="button" class="btn btn-info btn-lg">Info</button>
    <button type="button" class="btn btn-light btn-lg">Light</button>
    <button type="button" class="btn btn-dark text-nowarp btn-lg">Dark</button>

    <div class="container border">
      <div class="row border">
        <div class="col-md-5 col-lg-2 col-sm-4">Col 1</div>
        <div class="col-md-3 col-lg-2 col-sm-4">Col 2</div>
        <div class="col col-lg-2 col-sm-3">Col 3</div>
        <div class="col col-lg-2 col-sm-1">Col 4</div>
        <div class="col col-lg-2">Col 5</div>
        <div class="col col-lg-2">Col 6</div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />

    <div class="container">
      <div class="row">
        <div class="col">Col 7</div>
        <div class="col">Col 8</div>
        <div class="col">Col 9</div>
        <div class="col">Col 10</div>
        <div class="col">Col 11</div>
        <div class="col">Col 12</div>
      </div>
    </div>  
     <div class="container">
    <h1>Bootstrap 4 Align Right</h1>
    <hr />
    <div>
      <p>Note that the <code>d-flex</code> class indicates <strong>display:flex</strong>, while the
        <code>flex-row</code> classes sets the flex-direction along its main axis while <code>flex-column</code>
        sets the flex-direction along its cross-axis.
      </p>
      <p>The <code>btn</code> class applies Bootstrap's default button looks and behaviour to an element.
        <br>
        The <code>p-x</code> (where <strong>x</strong> represents a number) class adds padding when applied.</p>
    </div>
    <hr/>
    <div class="p-2">
      <p class="btn btn-outline-primary float-start">Float left</p>
      <p class="btn btn-outline-primary float-right">Float right</p>
      <br />
    </div>
    <hr/>
    <div class="d-flex flex-row justify-content-end p-1">
      <p>I am using justify-content-end class</p>
    </div>
    <hr/>

    <h3> Align Items End</h3>
    <div class="d-flex flex-column align-items-end">
      <p>item 1</p>
      <p>Item 2</p>
    </div>
    <hr/>

    <div class="d-flex flex-column">
      <h3> Align Self End </h3>
      <div>Item 1</div>
      <div class="align-self-end">Item 2</div>
      <div>Item 3</div>
    </div>
    <hr/>
    <div class="d-flex">
      <p class="btn btn-outline-primary ml-auto">ml.auto</p>
    </div>
    <hr/>
    <p class="text-right">This text is aligned to the right.</p>
  </div>
  <div class="form-group">
      <div class="row">

        <div class="border">
          <label for="exampleInputEmail1" dir="rtl"> اسم الموظف</label>
          <input type="email" class="form-control" placeholder="اسم الموظف" dir="rtl" />
        </div>

        <div class="form-group border">
          <div class="text-right">
            <label dir="rtl"> اسم الموظف</label>
          </div>
          <div class="text-right"> <!--You can add col-lg-12 if you want -->
              <button class="btn-info btn">Log in</button>
          </div>
          <input type="email" class="form-control" placeholder="اسم الموظف" dir="rtl" />
        </div>
        

      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.responsive-img {
  width: 30%;
}
@media (max-width: 575.98px) {

  .responsive-img {
    width: 30%;
  }
}

@media (max-width: 767.98px) {

  .responsive-img {
    width: 30%;
  }
}

@media (max-width: 991.98px) {

  .responsive-img {
    width: 30%;
  }
}

@media (max-width: 1199.98px) {

  .responsive-img {
    width: 30%;
  }
}

@media (max-width: 1399.98px) {

  .responsive-img {
    width: 30%;
  }
}


</style>