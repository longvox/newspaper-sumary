<template>
  <div>
    <div class='card mb-3'>
      <div class='row'>
        <div class='col-md-4'>
          <img
             :src='article.thumbnail'
            class='w-100'
          />
        </div>
        <div class='col-md-8 px-3'>
          <div class='card-block px-3'>
            <h4 class='card-title'>{{article.title}}</h4>
            <span>{{dateTime | moment('dddd, MMMM Do YYYY, h:mm a ') | changeDateOfWeekE2V }}</span>
            <p class='card-text' v-html='normalize(article.description)'></p>
            <a :href='article.link' class='btn btn-primary ml-auto'>Đọc tiếp ...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  data () {
    return {
      dateTime: new Date(this.article.created)
    }
  },
  mounted () {},
  methods: {
    normalize (htmlcode) {
      return htmlcode.replace(/<img[^>]*>/g, '')
    }
  },
  filters: {
    changeDateOfWeekE2V (date) {
      let dateSplit = date.split(',')
      switch (dateSplit[0]) {
        case 'Monday':
          dateSplit[0] = 'Thứ hai'
          break
        case 'Tuesday':
          dateSplit[0] = 'Thứ ba'
          break
        case 'Wednesday':
          dateSplit[0] = 'Thứ tư'
          break
        case 'Thursday':
          dateSplit[0] = 'Thứ năm'
          break
        case 'Friday':
          dateSplit[0] = 'Thứ sáu'
          break
        case 'Saturday':
          dateSplit[0] = 'Thứ bảy'
          break
        case 'Sunday':
          dateSplit[0] = 'Chủ nhật'
          break
        default:
          console.log(dateSplit[0])
      }
      return dateSplit.join(',')
    }
  }
}
</script>
