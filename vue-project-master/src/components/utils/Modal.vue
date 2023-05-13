<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"> {{ modalTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <span v-if="type == 'confirm'"> {{ message  }} </span>
          <div v-if="type=='reject'">
            <p style="margin-right: 5px; margin-bottom: 8px;"> {{ modalSubTitle }} </p>
            <textarea
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             :class="'form-control ' + classValue"
             cols="30" rows="5"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> إلغاء </button>
          <button type="button" data-bs-dismiss="modal" @click="action()" :class="type== 'reject' ? 'btn btn-danger' : 'btn btn-success'"> {{  yesButton }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    id: String,
    type: String,
    message: String,
    yesButton: String,
    action: Function,
    modalTitle: String,
    modalSubTitle: String,
    modelValue: String,
    classValue: String,
  }
}
</script>

<style>

</style>