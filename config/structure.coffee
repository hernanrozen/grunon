# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Nueva Orden"
      id: "index"
      location: "producto#index" # Supersonic module#view type navigation
    }
    {
      title: "Birra"
      id: "cerveza"
      location: "cerveza#index" # Supersonic module#view type navigation
    }
 
  ]

rootView:
   location: "index"

preloads: [
    {
      id: "cerveza"
      location: "cerveza#index" # Supersonic module#view type navigation
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
