Selectize.define("preserve_on_blur",function(options){var original,self=this;options.text=options.text||function(option){return option[this.settings.labelField]},this.onBlur=(original=self.onBlur,function(e){var inputValue=this.$control_input.val();original.apply(this,e),this.setTextboxValue(inputValue)})});