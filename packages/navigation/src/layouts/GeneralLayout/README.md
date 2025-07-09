# GeneralLayout

A flexible layout component that provides a sidebar and header for web applications using the @idealyst/components library.

## Features

- **Collapsible Sidebar**: Expandable and collapsible sidebar with smooth animations
- **Configurable Header**: Optional header with customizable content and height
- **Responsive Design**: Adapts to different screen sizes
- **Theme Integration**: Uses @idealyst/components theme system
- **Flexible Configuration**: Both sidebar and header can be disabled

## Usage

```tsx
import { GeneralLayout } from '@idealyst/navigation';
import { View, Text } from '@idealyst/components';

function App() {
  return (
    <GeneralLayout
      header={{
        enabled: true,
        height: 64,
        content: <Text>My Header Content</Text>,
      }}
      sidebar={{
        enabled: true,
        initiallyExpanded: true,
        expandedWidth: 280,
        collapsedWidth: 60,
        collapsible: true,
        position: 'left',
        content: <Text>My Sidebar Content</Text>,
      }}
    >
      <View>
        <Text>Main content goes here</Text>
      </View>
    </GeneralLayout>
  );
}
```

## Props

### GeneralLayoutProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The main content to display |
| `sidebar` | `SidebarConfig` | `{}` | Sidebar configuration object |
| `header` | `HeaderConfig` | `{}` | Header configuration object |
| `style` | `any` | - | Additional styles for the layout container |
| `testID` | `string` | - | Test ID for testing |

### SidebarConfig

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Whether the sidebar is enabled |
| `initiallyExpanded` | `boolean` | `true` | Whether the sidebar is initially expanded |
| `expandedWidth` | `number` | `280` | Width of the sidebar when expanded (px) |
| `collapsedWidth` | `number` | `60` | Width of the sidebar when collapsed (px) |
| `collapsible` | `boolean` | `true` | Whether the sidebar can be collapsed |
| `position` | `'left' \| 'right'` | `'left'` | Position of the sidebar |
| `content` | `ReactNode` | - | Content to display in the sidebar |
| `style` | `any` | - | Custom styles for the sidebar |

### HeaderConfig

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Whether the header is enabled |
| `height` | `number` | `64` | Height of the header (px) |
| `content` | `ReactNode` | - | Content to display in the header |
| `style` | `any` | - | Custom styles for the header |

## Examples

### Basic Layout with Header and Sidebar

```tsx
<GeneralLayout
  header={{
    content: <Text>My App</Text>,
  }}
  sidebar={{
    content: (
      <View>
        <Text>Home</Text>
        <Text>About</Text>
      </View>
    ),
  }}
>
  <View>
    <Text>Main content</Text>
  </View>
</GeneralLayout>
```

### Layout with Disabled Header

```tsx
<GeneralLayout
  header={{ enabled: false }}
  sidebar={{
    content: <Text>Navigation items</Text>,
  }}
>
  <View>
    <Text>Main content</Text>
  </View>
</GeneralLayout>
```

### Layout with Right Sidebar

```tsx
<GeneralLayout
  sidebar={{
    position: 'right',
    content: <Text>Right sidebar content</Text>,
  }}
>
  <View>
    <Text>Main content</Text>
  </View>
</GeneralLayout>
```

### Layout with Custom Dimensions

```tsx
<GeneralLayout
  header={{
    height: 80,
    content: <Text>Tall header</Text>,
  }}
  sidebar={{
    expandedWidth: 320,
    collapsedWidth: 80,
    content: <Text>Wide sidebar</Text>,
  }}
>
  <View>
    <Text>Main content</Text>
  </View>
</GeneralLayout>
```

## Styling

The GeneralLayout uses the @idealyst/components theme system for consistent styling:

- **Background**: Uses `background="surface"` for sidebar and header
- **Borders**: Uses `border="thin"` for visual separation
- **Spacing**: Uses `spacing="md"` for consistent padding
- **Theme Integration**: Automatically inherits theme colors and spacing

## Platform Support

Currently, the GeneralLayout only supports web platforms. React Native support may be added in future versions.

## Implementation Notes

- The layout uses CSS flexbox for responsive behavior
- Sidebar transitions use CSS animations for smooth expand/collapse
- Toggle button automatically adjusts position based on sidebar location
- Theme colors and spacing are applied through the View component variants 