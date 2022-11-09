<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.top {
	height: 72px;
	width: 100%;
}
.top-title {
	height: 100%;
	font-size: 32px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
}
.center {
	height: calc(75% - 72px);
}
.center-left{
  &-top{
    height: 65%;
  }
  &-bottom{
    height: 35%;
    .dashbord-show{
      height: calc(100% - 32px);
      &-dashboard{
        height: 100%;
      }
    }
  }
}
.center-right{
  &-top{
    height: 65%;
  }
  &-bottom{
    height: 35%;
  }
}
.bottom {
	height: 25%;
}
.position-rel {
	position: relative;
}
.position-right{
  position: absolute;
  right: 0;
  top: 0;
}
.simple-header {
	width: 60%;
	margin: 0 auto;
	font-size: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	height: 32px;
	justify-content: center;
	font-weight: bold;
	background-image: linear-gradient(to right, transparent, rgb(84, 150, 178), rgb(84, 150, 178), transparent);
}
</style>
