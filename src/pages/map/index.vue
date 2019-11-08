<template>
  <div>
    <map id="map"
         :longitude="longitude"
         :latitude="latitude"
         scale="14"
         bindmarkertap="markertap"
         :markers="markers"
         show-location></map>
  </div>
</template>

<script>
// import QQMapWX from
var QQMapWX = require('../../../static/js/qqmap-wx-jssdk.min.js')
export default {

  data () {
    return {
      qqmap: null,
      routeInfo: {},
      longitude: '',
      latitude: '',
      markers: {}
    }
  },
  mounted () {
    this.getCurLocation()
  },
  methods: {
    getCurLocation () {
      this.qqmap = new QQMapWX({
        key: 'BV5BZ-2HSWP-AQ6DQ-LD6KZ-6Z5JQ-BPB4J'
      })
      wx.getLocation({
        type: 'wgs84',
        success: res => {
          this.qqmap.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            }
          })
          this.getCityInfo(res)
        }
      })
    },
    /* 逆向地理编码 */
    getCityInfo (res) {
      wx.request({
        url: 'https://api.map.baidu.com/reverse_geocoding/v3/?ak=bLUkV6ysTS13WDF7CKEL4ukZSVrTayrD&output=json&coordtype=wgs84ll&location=' + res.latitude + ',' + res.longitude + '&s=1',
        header: {
          'Content-Type': 'application/json '
        },
        data: {},
        success: red => {
          let mapObj = red.data.result
          this.longitude = mapObj.location.lng
          this.latitude = mapObj.location.lat
        }
      })
    }
  }
}
</script>

<style>
  #map{width: 100%;height: 100vh;position: absolute;z-index: 99}
</style>
