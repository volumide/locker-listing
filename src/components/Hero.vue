<template>
    <div class="container-fluid  px-0">
        <!-- hero section -->
        <div class="text-white py-5 px-3 hero bg-dark">
            <h1>
                Find a Locker
            </h1>
            <div class="d-flex jsutify-content-center align-items-center px-1 py-1">
                <div class="form-group">
                  <input type="text" class="form-control rounded-0" name="" id="" aria-describedby="helpId" placeholder="">
                </div>
                <button type="button" class="btn btn-primary rounded-0">Find Locker</button>
            </div>
        </div>

        <!-- Information based on search -->
        <div class="locker-info bg-light py-3 px-3 d-flex justify-content-between align-items-center">
            <p>6 opens lokers available</p>
            <div>
                <label for="options" class="pe-3">Sort By</label>
                <select name="" id="options" class="form-select">
                    <option value=""></option>
                    <option value="lowest">Lowest</option>
                    <option value="closest">Closest</option>
                </select>
                <a href="#">view guide size</a>
            </div>
        </div>

        <!-- available locker list -->
        <div class="row py-3 px-3">
            <div class="col-md-2">
                <div class="card" style="width: 100%">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <p class="card-title">22A Adelolu Odeku Street, VI, Lagos</p>
                        <h2 class="card-text">&#8902;</h2>
                        <a href="#" class="btn btn-primary">0.3 Miles Away</a>
                    </div>
                </div>
            </div>
            <div class="col-md-10">
                <div>
                    <select class="form-select d-inline">
                        <option value="" selected>Featured</option>
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                    </select>
                </div>
                <div>
                    <table class="table table-striped mt-3">
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a href="#">view all lockers at this location</a>
            </div>
        </div>
    </div>
</template>