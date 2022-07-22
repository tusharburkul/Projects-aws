var ewaStatusBarJSON = "{\"name\" : \"CommandUI\",\"attrs\": {\"xmlns\":\"http:\\u002f\\u002fschemas.microsoft.com\\u002fsharepoint\\u002f\"},\"children\":[{\"name\" : \"StatusBar\",\"attrs\": {\"Id\":\"NamingContainerPrefix_EWAStatusBar\",\"ImageDownArrow\":\"EWA_COMMON_CLUSTER\",\"ImageDownArrowClass\":\"ewaboot_statusbardownarrow\",\"ImageDownArrow8by8\":\"EWA_COMMON_CLUSTER\",\"ImageDownArrow8by8Class\":\"ewaboot_statusbardownarrow_8X8X32\",\"ImageCheckMark\":\"EWA_COMMON_CLUSTER\",\"ImageCheckMarkClass\":\"ewaboot_checkmark16\",\"Size\":\"OneRow\",\"TeamId\":\"XLS\",\"TextDirection\":\"ltr\",\"Scale\":\"true\",\"LabelText\":\"Status Bar\"},\"children\":[{\"name\" : \"Docks\",\"attrs\": {\"Id\":\"NamingContainerPrefix_statusBarButtonDocks\"},\"children\":[{\"name\" : \"ButtonDock\",\"attrs\": {\"Id\":\"NamingContainerPrefix_statusBarDockCenter\",\"Alignment\":\"Center\"},\"children\":[{\"name\" : \"Controls\",\"attrs\": {\"id\":\"statusBarControlsCenter\"},\"children\":[{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_LongTaskCountLabel\",\"QueryCommand\":\"QueryLongTasksCount\",\"LabelText\":\"\",\"Alt\":\"Count of total long JS tasks and duration of last long task. Useful for detecting scenarios which consistently result in long JS tasks.\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_centerStatusLabel\",\"LabelText\":\"Operated by 21Vianet in Accordance with Chinese Law\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"ToggleButton\",\"attrs\": {\"Id\":\"NamingContainerPrefix_MergeSuspensionStatusLabel\",\"TogglesWhenExecuted\":\"false\",\"QueryCommand\":\"QueryMergeSuspensionStatus\",\"LabelText\":\"\",\"Command\":\"1905775613\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_OcsConnectionStatusLabel\",\"QueryCommand\":\"QueryOcsConnectionStatus\",\"LabelText\":\"\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_EnvironmentLabel\",\"QueryCommand\":\"QueryEnvironmentName\",\"LabelText\":\"\",\"DisplayMode\":\"Medium14\",\"Visible\":\"false\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_CanvasStatusLabel\",\"QueryCommand\":\"QueryCanvasStatus\",\"LabelText\":\"\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_PhaseNameStatusLabel\",\"QueryCommand\":\"QueryPhaseStatus\",\"LabelText\":\"\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_DataSourceDirtinessButton\",\"LabelText\":\"PivotTable Refresh Needed\",\"Command\":\"-1193102612\",\"DisplayMode\":\"Medium14\",\"Visible\":\"false\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_NetworkInfoLabel\",\"QueryCommand\":\"QueryNetworkInformation\",\"LabelText\":\"\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_SLMDelayInfoLabel\",\"QueryCommand\":\"QuerySLMDelayInformation\",\"LabelText\":\"\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_ExcelLiveViewStateLabel\",\"QueryCommand\":\"QueryExcelLiveViewState\",\"LabelText\":\"\",\"DisplayMode\":\"Medium14\"}}]}]},{\"name\" : \"ButtonDock\",\"attrs\": {\"Id\":\"NamingContainerPrefix_statusBarDockLeft\",\"Alignment\":\"Left\"},\"children\":[{\"name\" : \"Controls\",\"attrs\": {\"id\":\"statusBarControlsLeft\"},\"children\":[{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_DevServerStatusButton\",\"LabelText\":\"DevServer Status: Unknown\",\"Command\":\"1656443126\",\"QueryCommand\":\"QueryDevServerStatus\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_PasteShorcutEnabledLabel\",\"LabelText\":\"Select destination and press ENTER or choose Paste\",\"DisplayMode\":\"Medium14\",\"QueryCommand\":\"QueryPasteShortcutEnabledLabel\",\"Visible\":\"false\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_progressLabel\",\"LabelText\":\"\",\"QueryCommand\":\"QueryProgressLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_ClassificationLabel\",\"Image16by16\":\"EWA_OTHER_CLUSTER\",\"Command\":\"798637440\",\"QueryCommand\":\"QueryPolicyLabel\",\"DisplayMode\":\"Medium14\",\"Visible\":\"false\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_SheetNumberButton\",\"LabelText\":\"Sheet Number\",\"Command\":\"301511274\",\"QueryCommand\":\"QuerySheetNumberButton\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_WorkbookStatisticsButton\",\"LabelText\":\"Workbook Statistics\",\"Command\":\"2070214365\",\"QueryCommand\":\"QueryWorkbookStatisticsButton\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_SelectionModeLabel\",\"LabelText\":\"\",\"QueryCommand\":\"QuerySelectionModeLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_EndModeLabel\",\"LabelText\":\"End Mode\",\"QueryCommand\":\"QueryEndModeLabel\",\"DisplayMode\":\"Medium14\"}}]}]},{\"name\" : \"ButtonDock\",\"attrs\": {\"Id\":\"NamingContainerPrefix_statusBarDockRight\",\"Alignment\":\"Right\",\"ScalingDirection\":\"Begin\"},\"children\":[{\"name\" : \"Controls\",\"attrs\": {\"id\":\"statusBarControlsRight\"},\"children\":[{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_NetworkDisconnectedLabel\",\"LabelText\":\"Disconnected\",\"Image16by16\":\"EWA_OTHER_CLUSTER\",\"Image16by16Class\":\"ewaother_AlertWarning_16x16x32\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_NetworkConnectedLabel\",\"LabelText\":\"Connected\",\"Command\":\"798637440\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_OfficeAddinLabel\",\"LabelText\":\"\",\"Image16by16\":\"EWA_OTHER_CLUSTER\",\"Image16by16Class\":\"ewaother_AppForOfficeGray14\",\"Command\":\"516359383\",\"QueryCommand\":\"QueryAddinLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_averageLabel\",\"QueryCommand\":\"QueryAverageLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_countLabel\",\"QueryCommand\":\"QueryCountLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_numericalCountLabel\",\"QueryCommand\":\"QueryNumericalCountLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_minimumLabel\",\"QueryCommand\":\"QueryMinimumLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_maximumLabel\",\"QueryCommand\":\"QueryMaximumLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_sumLabel\",\"QueryCommand\":\"QuerySumLabel\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"FlyoutAnchor\",\"attrs\": {\"Id\":\"NamingContainerPrefix_customizeStatusBarFlyout\",\"Alt\":\"Customize Status Bar\",\"Command\":\"-2058599425\",\"PopulateOnlyOnce\":\"true\"},\"children\":[{\"name\" : \"Menu\",\"attrs\": {\"Id\":\"NamingContainerPrefix_customizeStatusBarMenu\"},\"children\":[{\"name\" : \"MenuSection\",\"attrs\": {\"Id\":\"NamingContainerPrefix_customizeStatusBarMenuSection\",\"Title\":\"Customize Status Bar\",\"DisplayMode\":\"Menu16\"},\"children\":[{\"name\" : \"Controls\",\"attrs\": {},\"children\":[{\"name\" : \"ToggleButton\",\"attrs\": {\"Id\":\"NamingContainerPrefix_toggleAverageButton\",\"Alt\":\"Average of selected cells\",\"UseCheckMark\":\"true\",\"CloseMenuWhenExecuted\":\"false\",\"Command\":\"-1015637685\",\"CheckedImage\":\"EWA_COMMON_CLUSTER\",\"CheckedImageClass\":\"ewaboot_checkmark16\",\"QueryCommand\":\"QueryAverageButton\"}},{\"name\" : \"ToggleButton\",\"attrs\": {\"Id\":\"NamingContainerPrefix_toggleCountButton\",\"Alt\":\"Number of selected cells that contain text or numerical values\",\"UseCheckMark\":\"true\",\"CloseMenuWhenExecuted\":\"false\",\"Command\":\"1957769939\",\"CheckedImage\":\"EWA_COMMON_CLUSTER\",\"CheckedImageClass\":\"ewaboot_checkmark16\",\"QueryCommand\":\"QueryCountButton\"}},{\"name\" : \"ToggleButton\",\"attrs\": {\"Id\":\"NamingContainerPrefix_toggleNumericalCountButton\",\"Alt\":\"Number of selected cells that contain numerical values\",\"UseCheckMark\":\"true\",\"CloseMenuWhenExecuted\":\"false\",\"Command\":\"-1292677035\",\"CheckedImage\":\"EWA_COMMON_CLUSTER\",\"CheckedImageClass\":\"ewaboot_checkmark16\",\"QueryCommand\":\"QueryNumericalCountButton\"}},{\"name\" : \"ToggleButton\",\"attrs\": {\"Id\":\"NamingContainerPrefix_toggleMinimumButton\",\"Alt\":\"Minimum value in selection\",\"UseCheckMark\":\"true\",\"CloseMenuWhenExecuted\":\"false\",\"Command\":\"405783320\",\"CheckedImage\":\"EWA_COMMON_CLUSTER\",\"CheckedImageClass\":\"ewaboot_checkmark16\",\"QueryCommand\":\"QueryMinimumButton\"}},{\"name\" : \"ToggleButton\",\"attrs\": {\"Id\":\"NamingContainerPrefix_toggleMaximumButton\",\"Alt\":\"Maximum value in selection\",\"UseCheckMark\":\"true\",\"CloseMenuWhenExecuted\":\"false\",\"Command\":\"1210824414\",\"CheckedImage\":\"EWA_COMMON_CLUSTER\",\"CheckedImageClass\":\"ewaboot_checkmark16\",\"QueryCommand\":\"QueryMaximumButton\"}},{\"name\" : \"ToggleButton\",\"attrs\": {\"Id\":\"NamingContainerPrefix_toggleSumButton\",\"Alt\":\"Sum of selected cells\",\"UseCheckMark\":\"true\",\"CloseMenuWhenExecuted\":\"false\",\"Command\":\"1265371067\",\"CheckedImage\":\"EWA_COMMON_CLUSTER\",\"CheckedImageClass\":\"ewaboot_checkmark16\",\"QueryCommand\":\"QuerySumButton\"}}]}]}]}]},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_separatorLabel\",\"LabelText\":\"\\u00A0\\u00A0\\u00A0\\u00A0\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_giveFeedback\",\"LabelText\":\"Give Feedback to Microsoft\",\"Alt\":\"Help Improve Office\",\"Command\":\"802602464\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_giveFeedbackPane\",\"LabelText\":\"Give Feedback to Microsoft\",\"Alt\":\"Help Improve Office\",\"Command\":\"-1969051244\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Label\",\"attrs\": {\"Id\":\"NamingContainerPrefix_separatorLabelAfterZoom\",\"LabelText\":\"\\u00A0\\u00A0\\u00A0\\u00A0\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_ZoomDecrease\",\"Alt\":\"Zoom out\",\"Image16by16\":\"EWA_OTHER_CLUSTER\",\"Image16by16Class\":\"ewaother_zoomMinus12\",\"Command\":\"1664364901\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"FlyoutAnchor\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoomLevel\",\"LabelText\":\"\",\"Alt\":\"Zoom Level\",\"Command\":\"298515797\",\"Alignment\":\"Right\",\"QueryCommand\":\"QueryZoomStatus\"},\"children\":[{\"name\" : \"Menu\",\"attrs\": {\"Id\":\"NamingContainerPrefix_setZoomLevelMenu\"},\"children\":[{\"name\" : \"MenuSection\",\"attrs\": {\"Id\":\"NamingContainerPrefix_setZoomLevelMenuSection\"},\"children\":[{\"name\" : \"Controls\",\"attrs\": {},\"children\":[{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom200\",\"LabelText\":\"200\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"2\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom175\",\"LabelText\":\"175\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"1.75\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom150\",\"LabelText\":\"150\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"1.5\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom125\",\"LabelText\":\"125\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"1.25\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom100\",\"LabelText\":\"100\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"1\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom75\",\"LabelText\":\"75\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"0.75\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom50\",\"LabelText\":\"50\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"0.5\",\"DisplayMode\":\"Medium14\"}},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_zoom25\",\"LabelText\":\"25\\u0025\",\"Command\":\"-1918142559\",\"MenuItemId\":\"0.25\",\"DisplayMode\":\"Medium14\"}}]}]}]}]},{\"name\" : \"Button\",\"attrs\": {\"Id\":\"NamingContainerPrefix_ZoomIncrease\",\"Alt\":\"Zoom in\",\"Image16by16\":\"EWA_OTHER_CLUSTER\",\"Image16by16Class\":\"ewaother_zoomPlus12\",\"Command\":\"-1441674458\",\"DisplayMode\":\"Medium14\"}}]}]}]}]}]}";