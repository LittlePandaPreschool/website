<script lang="ts">
  export let selected = false;
</script>

<button
  class="panda-button"
  class:selected
  on:click
>
  <div class="paw-main">
    <span class="text"><slot /></span>
  </div>
  <div class="toe toe-1"></div>
  <div class="toe toe-2"></div>
  <div class="toe toe-3"></div>
</button>

<style lang="postcss">
  .panda-button {
    position: relative;
    width: 180px;
    height: 150px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;
  }
  .panda-button:hover {
    transform: scale(1.1);
  }
  .paw-main {
    position: absolute;
    width: 90px;
    height: 75px;
    background-color: #ccc;
    border-radius: 50% 50% 40% 40%;
    bottom: 10px;
    left: 30px;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toe {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    transition: background-color 0.3s;
  }
  .toe-1 {
    top: 30px;
    left: 37.5px;
  }
  .toe-2 {
    top: 15px;
    left: 75px;
  }
  .toe-3 {
    top: 30px;
    left: 112.5px;
  }
  .text {
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
    text-align: center;
  }
  .selected .paw-main,
  .selected .toe {
    background-color: #4caf50;
  }
  .selected .text {
    color: #fff;
  }

  @media (max-width: 768px) {
    .panda-button {
      width: 120px;
      height: 100px;
    }
    .paw-main {
      width: 60px;
      height: 50px;
      bottom: 5px;
      left: 20px;
    }
    .toe {
      width: 20px;
      height: 20px;
    }
    .toe-1 {
      top: 20px;
      left: 25px;
    }
    .toe-2 {
      top: 10px;
      left: 50px;
    }
    .toe-3 {
      top: 20px;
      left: 75px;
    }
    .text {
      font-size: 0.8rem;
    }
  }
</style>
