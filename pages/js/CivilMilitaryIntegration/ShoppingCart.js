var vm = new Vue({
	el: "#myVue",
	data: {
		 /*数据源*/
		 CityInfo: CityInfo,//地区数据
		 form: {
	         	city : '',
				erae : '',
				minerae : '',
				selectedOptions: [],//地区筛选数组
        },
	},
	methods: {
		handleChange (value) {
			this.form.city = this.form.selectedOptions[0];
			this.form.erae = this.form.selectedOptions[1]
			this.form.minerae = this.form.selectedOptions[2]
		}
	},
	/*地区过滤器*/
	filters:{
		myAddressCity:function(value){
			for(y in this.CityInfo){
				if(this.CityInfo[y].value == value){
					return value = this.CityInfo[y].label
				}
			}
		},
		myAddressErae:function(value){
			for(y in this.CityInfo){
				for(z in this.CityInfo[y].children){
					if(this.CityInfo[y].children[z].value == value && value!=undefined){
						return value = this.CityInfo[y].children[z].label;
					}
				}
			}
		},
		myAddressMinerae:function(value){
			for(y in this.CityInfo){
				for(z in this.CityInfo[y].children){
					for(i in this.CityInfo[y].children[z].children){
						if(this.CityInfo[y].children[z].children[i].value == value && value!=undefined){
							return value = this.CityInfo[y].children[z].children[i].label
						}
					}
				}
			}
		},
	},
});
