import React from 'react'

// Exported from redux-devtools
import { createDevTools } from '@redux-devtools/core'

// Monitors are separate packages, and you can make a custom one
import { LogMonitor } from '@redux-devtools/log-monitor'
import { InspectorMonitor } from '@redux-devtools/inspector-monitor'
import { SliderMonitor } from '@redux-devtools/slider-monitor'
import { ChartMonitor } from '@redux-devtools/chart-monitor'
import { DockMonitor } from '@redux-devtools/dock-monitor'

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  // @ts-ignore
  <DockMonitor>
    <InspectorMonitor theme="tomorrow" />
  </DockMonitor>,
)

export default DevTools
