<template>
  <div>
    <div class="container-fluid p-2">
      <div class="container-fluid border border-info mt-2" style="height: 90px">
        <div class="row">
          <div class="col-sm-1 d-flex justify-content-center">
            <img
              src="../jpg/images.jpg"
              class="rounded zoom"              
              style="height: 85px"
            />
          </div>
          <div
            class="
              col-sm-2
              text-primary
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <div class="overflow-auto">自制型號1</div>
          </div>
          <div class="col-sm-4 text-primary">
            <div class="overflow-auto" style="height: 85px">
              自制型號1 自制型號1 自制型號1 自制型號1 自制型號1
              自制型號1自制型號1自制型號1自制型號1自制型號1自制型號1自制型號1自制型號1
              自制型號1自制型號1自制型號1自制型號1自制型號1自制型號1自制型號1自制型號1
            </div>
          </div>
          <div
            class="
              col-sm-1
              text-danger
              d-flex
              align-items-center
              justify-content-center
            "
          >
            21800.00
          </div>
          <div
            class="col-sm-2 d-flex align-items-center text-center"
            style="text-align: right"
          >
            <!-- <input type="text" class="form-control form-control-sm"> -->
            <!-- <select class="form-control form-control-sm">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select> -->
            <div class="input-group ">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                @click="dtnumber = dtnumber - 1"
                :disabled="dtnumber <= 0"
              >
                -
              </button>
              <input
                type="number"
                class="form-control text-center bg-white"
                disabled="disabled"
                v-model="dtnumber"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                @click="dtnumber = dtnumber + 1"
              >
                +
              </button>
            </div>
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            
              <button type="button" class="btn btn-danger" style="width:80px" >訂購</button>
            
          </div>
        </div>
      </div>
    </div>
    <div class="input-group mb-3">
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        @click="dtnumber = dtnumber - 1"
        :disabled="dtnumber <= 0"
      >
        -
      </button>
      <input
        type="number"
        class="form-control text-center bg-white"
        disabled="disabled"
        v-model="dtnumber"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        @click="dtnumber = dtnumber + 1"
      >
        +
      </button>
    </div>
    <button type="button" class="btn-close" aria-label="Close"></button>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Launch static backdrop modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="top"
      data-bs-content="Top popover"
    >
      Popover on top
    </button>
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01">Options</label>
      <select class="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>

<script>
import { Popover } from "bootstrap/dist/js/bootstrap.esm.js";
export default {
  data() {
    return {
      dtnumber: 1,
    };
  },
  mounted() {
    //inti Popover
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((popoverNode) => new Popover(popoverNode));
  },
};
</script>

<style>
.zoom:hover {
  transform: scale(1.5); /* (150% zoom)*/
}
*::-webkit-scrollbar {
  width: 10px;
}

/* Track */
*::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background:rgb(147, 147, 245); 
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>