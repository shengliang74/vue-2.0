<template>
	<div class="login">
		<div class="input-wrap">
			<input type="text" v-model="name"/>
			<span v-if="error.name" class="err-msg">{{error.name}}</span>
		</div>
		<div class="input-wrap">
			<input type="password" v-model="pwd" />
			<span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
		</div>
		<div class="input-wrap">
			<button @click="login">提交</button>
		</div>
	</div>
</template>

<script>
import slModel from './model/slModel'
export default {
  name: 'Login',
  components: {
  	slModel: slModel,
  },
  data () {
    return {
      name: '',
      pwd: '',
      error: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    check (name, pwd ){
      if (!name ) {
        this.error.name = '请输入姓名';
        return false;
      }
      if (!pwd ) {
        this.error.name = '请输入密码';
        return false;
      }
      return true
    },
    login () {
      const { name,pwd } = this;

      //this.$loading();
      this.$modelFn.open();
      if ( !this.check( name,pwd )) return;
      if ( name == 'admin' && pwd == 123 ) {
        this.$router.push({
          name:'Main'
        })
      } else {
        alert( '用户名密码错误' );
      }
    },
  },
};
</script>
<style scoped lang="less">
	.login{
		width: 300px;
		margin: 10% auto;
	}
</style>