<template>
  <div class="container-fluid px-0">
    <!-- hero section -->
    <div class="text-white py-5 px-3 hero bg-dark corousel">
      <h1>Find a Locker</h1>
      <div class="d-flex jsutify-content-center align-items-center px-1 py-1">
        <div class="form-group">
          <input
            v-model="word"
            @input="changeText"
            type="text"
            class="form-control rounded-0"
            name=""
            id=""
            placeholder=""
          />
        </div>
        <button type="button" class="btn btn-primary rounded-0">Find Locker</button>
      </div>
    </div>

    <!-- Information based on search -->
    <div
      class="locker-info bg-light py-3 px-3 d-flex justify-content-between align-items-center"
    >
      <p>
        {{ location.length }} loker(s) available <span v-if="word"> in {{ word }} </span>
      </p>
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
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-92060,resizemode-1,msid-69384055/wealth/save/how-nominee-can-access-safe-deposit-locker-in-bank.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-title">22A Adelolu Odeku Street, VI, Lagos</p>
            <h2 class="card-text">
              <span v-for="(i, index) in 5" :key="index">&#8902;</span>
            </h2>
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
              <tr v-for="locker in location" :key="locker.id">
                <td>{{ locker.name }}</td>
                <td>{{ locker.description }}</td>
                <td>{{ locker.price }}</td>
                <td>
                  <router-link to="/rent" class="btn btn-success rounded-0">
                    Rent
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="#">view all lockers at this location</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lockers: [],
      location: [],
      word: "",
    };
  },
  methods: {
    filter(wordToMatch, locker) {
      return locker.filter((locker) => {
        const regex = new RegExp(wordToMatch, "gi");
        return locker.location.match(regex) || locker.city.match(regex);
      });
    },

    async getLocker() {
      let locker = await fetch("http://localhost:8100/find", {
        method: "get",
      });
      let responds = await locker.json();
      this.lockers = [...responds];
      this.location = this.lockers;
    },

    changeText() {
      let value = this.filter(this.word, this.lockers);
      value.map((r) => r);
      this.location = value;
      console.log(value.length);
    },
  },
  async mounted() {
    await this.getLocker();
  },
};
</script>
