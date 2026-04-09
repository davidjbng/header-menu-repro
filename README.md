# Starter Template with React Navigation

This is a minimal reproducible example for a bug with `unstable_headerRightItems` in React Native apps using Expo and React Navigation.

## How to Reproduce

- `npm run ios`
- Click on Menu in the header
- Click on "Settings"
- Close the "Settings" modal
- Reopen the Menu in the header 

### Expected Behavior

The "Settings" menu item should not have a checkmark.

### Actual Behavior

The "Settings" menu item is shown with a checkmark.
