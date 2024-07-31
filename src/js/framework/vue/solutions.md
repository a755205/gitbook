# solutions



## chinese whth input enter issue

### vue3 solution

-  use composition event

```js
// chatInput is ref for text imput
const chatInput = ref(null)

const isEnterCanSend = ref(true)
onMounted(() => {
  chatInput.value.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (isEnterCanSend.value) {
        handleDebounceSend()
      }
    }
  })

  chatInput.value.addEventListener('compositionstart', (e) => {
    isEnterCanSend.value = false
  })
  chatInput.value.addEventListener('compositionend', (e) => {
    isEnterCanSend.value = true
  })
})

const handleModifyPaddingMessage = (dialog) => dialog.open()

const ModifyPaddingMessage = defineAsyncComponent(
  () => import('@/components/dialogs/ModifyPaddingMessage.vue'),
)
```
