import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementManagedDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Comanaged Devices",
					"value": "Device Management List Comanaged Devices",
					"action": "Get comanagedDevices from deviceManagement",
					"description": "The list of co-managed devices report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices"
						}
					}
				},
				{
					"name": "Device Management Create Comanaged Devices",
					"value": "Device Management Create Comanaged Devices",
					"action": "Create new navigation property to comanagedDevices for deviceManagement",
					"description": "Create new navigation property to comanagedDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices"
						}
					}
				},
				{
					"name": "Device Management Delete Comanaged Devices",
					"value": "Device Management Delete Comanaged Devices",
					"action": "Delete navigation property comanagedDevices for deviceManagement",
					"description": "Delete navigation property comanagedDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Comanaged Devices",
					"value": "Device Management Get Comanaged Devices",
					"action": "Get comanagedDevices from deviceManagement",
					"description": "The list of co-managed devices report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Comanaged Devices",
					"value": "Device Management Update Comanaged Devices",
					"action": "Update the navigation property comanagedDevices in deviceManagement",
					"description": "Update the navigation property comanagedDevices in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Assignment Filter Evaluation Status Details",
					"value": "Device Management Comanaged Devices List Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Create Assignment Filter Evaluation Status Details",
					"value": "Device Management Comanaged Devices Create Assignment Filter Evaluation Status Details",
					"action": "Create new navigation property to assignmentFilterEvaluationStatusDetails for deviceManagement",
					"description": "Create new navigation property to assignmentFilterEvaluationStatusDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Assignment Filter Evaluation Status Details",
					"value": "Device Management Comanaged Devices Delete Assignment Filter Evaluation Status Details",
					"action": "Delete navigation property assignmentFilterEvaluationStatusDetails for deviceManagement",
					"description": "Delete navigation property assignmentFilterEvaluationStatusDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Assignment Filter Evaluation Status Details",
					"value": "Device Management Comanaged Devices Get Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Assignment Filter Evaluation Status Details",
					"value": "Device Management Comanaged Devices Update Assignment Filter Evaluation Status Details",
					"action": "Update the navigation property assignmentFilterEvaluationStatusDetails in deviceManagement",
					"description": "Update the navigation property assignmentFilterEvaluationStatusDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Detected Apps",
					"value": "Device Management Comanaged Devices List Detected Apps",
					"action": "Get detectedApps from deviceManagement",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Detected Apps",
					"value": "Device Management Comanaged Devices Get Detected Apps",
					"action": "Get detectedApps from deviceManagement",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps/{{$parameter[\"detectedApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Device Category",
					"value": "Device Management Comanaged Devices Delete Device Category",
					"action": "Delete navigation property deviceCategory for deviceManagement",
					"description": "Delete navigation property deviceCategory for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Device Category",
					"value": "Device Management Comanaged Devices Get Device Category",
					"action": "Get deviceCategory from deviceManagement",
					"description": "Device category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Device Category",
					"value": "Device Management Comanaged Devices Update Device Category",
					"action": "Update the navigation property deviceCategory in deviceManagement",
					"description": "Update the navigation property deviceCategory in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Device Compliance Policy States",
					"value": "Device Management Comanaged Devices List Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from deviceManagement",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Create Device Compliance Policy States",
					"value": "Device Management Comanaged Devices Create Device Compliance Policy States",
					"action": "Create new navigation property to deviceCompliancePolicyStates for deviceManagement",
					"description": "Create new navigation property to deviceCompliancePolicyStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Device Compliance Policy States",
					"value": "Device Management Comanaged Devices Delete Device Compliance Policy States",
					"action": "Delete navigation property deviceCompliancePolicyStates for deviceManagement",
					"description": "Delete navigation property deviceCompliancePolicyStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Device Compliance Policy States",
					"value": "Device Management Comanaged Devices Get Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from deviceManagement",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Device Compliance Policy States",
					"value": "Device Management Comanaged Devices Update Device Compliance Policy States",
					"action": "Update the navigation property deviceCompliancePolicyStates in deviceManagement",
					"description": "Update the navigation property deviceCompliancePolicyStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Device Configuration States",
					"value": "Device Management Comanaged Devices List Device Configuration States",
					"action": "Get deviceConfigurationStates from deviceManagement",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Create Device Configuration States",
					"value": "Device Management Comanaged Devices Create Device Configuration States",
					"action": "Create new navigation property to deviceConfigurationStates for deviceManagement",
					"description": "Create new navigation property to deviceConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Device Configuration States",
					"value": "Device Management Comanaged Devices Delete Device Configuration States",
					"action": "Delete navigation property deviceConfigurationStates for deviceManagement",
					"description": "Delete navigation property deviceConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Device Configuration States",
					"value": "Device Management Comanaged Devices Get Device Configuration States",
					"action": "Get deviceConfigurationStates from deviceManagement",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Device Configuration States",
					"value": "Device Management Comanaged Devices Update Device Configuration States",
					"action": "Update the navigation property deviceConfigurationStates in deviceManagement",
					"description": "Update the navigation property deviceConfigurationStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Device Health Script States",
					"value": "Device Management Comanaged Devices List Device Health Script States",
					"action": "Get deviceHealthScriptStates from deviceManagement",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Device Health Script States",
					"value": "Device Management Comanaged Devices Get Device Health Script States",
					"action": "Get deviceHealthScriptStates from deviceManagement",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates/id='{{$parameter[\"id\"]}}',policyId='{{$parameter[\"policyId\"]}}',deviceId='{{$parameter[\"deviceId\"]}}'"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Log Collection Requests",
					"value": "Device Management Comanaged Devices List Log Collection Requests",
					"action": "Get logCollectionRequests from deviceManagement",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Create Log Collection Requests",
					"value": "Device Management Comanaged Devices Create Log Collection Requests",
					"action": "Create new navigation property to logCollectionRequests for deviceManagement",
					"description": "Create new navigation property to logCollectionRequests for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Log Collection Requests",
					"value": "Device Management Comanaged Devices Delete Log Collection Requests",
					"action": "Delete navigation property logCollectionRequests for deviceManagement",
					"description": "Delete navigation property logCollectionRequests for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Log Collection Requests",
					"value": "Device Management Comanaged Devices Get Log Collection Requests",
					"action": "Get logCollectionRequests from deviceManagement",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Log Collection Requests",
					"value": "Device Management Comanaged Devices Update Log Collection Requests",
					"action": "Update the navigation property logCollectionRequests in deviceManagement",
					"description": "Update the navigation property logCollectionRequests in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Managed Device Mobile App Configuration States",
					"value": "Device Management Comanaged Devices List Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Create Managed Device Mobile App Configuration States",
					"value": "Device Management Comanaged Devices Create Managed Device Mobile App Configuration States",
					"action": "Create new navigation property to managedDeviceMobileAppConfigurationStates for deviceManagement",
					"description": "Create new navigation property to managedDeviceMobileAppConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Managed Device Mobile App Configuration States",
					"value": "Device Management Comanaged Devices Delete Managed Device Mobile App Configuration States",
					"action": "Delete navigation property managedDeviceMobileAppConfigurationStates for deviceManagement",
					"description": "Delete navigation property managedDeviceMobileAppConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Managed Device Mobile App Configuration States",
					"value": "Device Management Comanaged Devices Get Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Managed Device Mobile App Configuration States",
					"value": "Device Management Comanaged Devices Update Managed Device Mobile App Configuration States",
					"action": "Update the navigation property managedDeviceMobileAppConfigurationStates in deviceManagement",
					"description": "Update the navigation property managedDeviceMobileAppConfigurationStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Security Baseline States",
					"value": "Device Management Comanaged Devices List Security Baseline States",
					"action": "Get securityBaselineStates from deviceManagement",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Create Security Baseline States",
					"value": "Device Management Comanaged Devices Create Security Baseline States",
					"action": "Create new navigation property to securityBaselineStates for deviceManagement",
					"description": "Create new navigation property to securityBaselineStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Security Baseline States",
					"value": "Device Management Comanaged Devices Delete Security Baseline States",
					"action": "Delete navigation property securityBaselineStates for deviceManagement",
					"description": "Delete navigation property securityBaselineStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Security Baseline States",
					"value": "Device Management Comanaged Devices Get Security Baseline States",
					"action": "Get securityBaselineStates from deviceManagement",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Security Baseline States",
					"value": "Device Management Comanaged Devices Update Security Baseline States",
					"action": "Update the navigation property securityBaselineStates in deviceManagement",
					"description": "Update the navigation property securityBaselineStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Security Baseline States List Setting States",
					"value": "Device Management Comanaged Devices Security Baseline States List Setting States",
					"action": "Get settingStates from deviceManagement",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Security Baseline States Create Setting States",
					"value": "Device Management Comanaged Devices Security Baseline States Create Setting States",
					"action": "Create new navigation property to settingStates for deviceManagement",
					"description": "Create new navigation property to settingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Security Baseline States Delete Setting States",
					"value": "Device Management Comanaged Devices Security Baseline States Delete Setting States",
					"action": "Delete navigation property settingStates for deviceManagement",
					"description": "Delete navigation property settingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Security Baseline States Get Setting States",
					"value": "Device Management Comanaged Devices Security Baseline States Get Setting States",
					"action": "Get settingStates from deviceManagement",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Security Baseline States Update Setting States",
					"value": "Device Management Comanaged Devices Security Baseline States Update Setting States",
					"action": "Update the navigation property settingStates in deviceManagement",
					"description": "Update the navigation property settingStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices List Users",
					"value": "Device Management Comanaged Devices List Users",
					"action": "Get users from deviceManagement",
					"description": "The primary users associated with the managed device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/users"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Delete Windows Protection State",
					"value": "Device Management Comanaged Devices Delete Windows Protection State",
					"action": "Delete navigation property windowsProtectionState for deviceManagement",
					"description": "Delete navigation property windowsProtectionState for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Get Windows Protection State",
					"value": "Device Management Comanaged Devices Get Windows Protection State",
					"action": "Get windowsProtectionState from deviceManagement",
					"description": "The device protection status. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Update Windows Protection State",
					"value": "Device Management Comanaged Devices Update Windows Protection State",
					"action": "Update the navigation property windowsProtectionState in deviceManagement",
					"description": "Update the navigation property windowsProtectionState in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Windows Protection State List Detected Malware State",
					"value": "Device Management Comanaged Devices Windows Protection State List Detected Malware State",
					"action": "Get detectedMalwareState from deviceManagement",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Windows Protection State Create Detected Malware State",
					"value": "Device Management Comanaged Devices Windows Protection State Create Detected Malware State",
					"action": "Create new navigation property to detectedMalwareState for deviceManagement",
					"description": "Create new navigation property to detectedMalwareState for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Windows Protection State Delete Detected Malware State",
					"value": "Device Management Comanaged Devices Windows Protection State Delete Detected Malware State",
					"action": "Delete navigation property detectedMalwareState for deviceManagement",
					"description": "Delete navigation property detectedMalwareState for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Windows Protection State Get Detected Malware State",
					"value": "Device Management Comanaged Devices Windows Protection State Get Detected Malware State",
					"action": "Get detectedMalwareState from deviceManagement",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Comanaged Devices Windows Protection State Update Detected Malware State",
					"value": "Device Management Comanaged Devices Windows Protection State Update Detected Malware State",
					"action": "Update the navigation property detectedMalwareState in deviceManagement",
					"description": "Update the navigation property detectedMalwareState in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management List Managed Devices",
					"value": "Device Management List Managed Devices",
					"action": "Get managedDevices from deviceManagement",
					"description": "The list of managed devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices"
						}
					}
				},
				{
					"name": "Device Management Create Managed Devices",
					"value": "Device Management Create Managed Devices",
					"action": "Create new navigation property to managedDevices for deviceManagement",
					"description": "Create new navigation property to managedDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices"
						}
					}
				},
				{
					"name": "Device Management Delete Managed Devices",
					"value": "Device Management Delete Managed Devices",
					"action": "Delete navigation property managedDevices for deviceManagement",
					"description": "Delete navigation property managedDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Managed Devices",
					"value": "Device Management Get Managed Devices",
					"action": "Get managedDevices from deviceManagement",
					"description": "The list of managed devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Managed Devices",
					"value": "Device Management Update Managed Devices",
					"action": "Update the navigation property managedDevices in deviceManagement",
					"description": "Update the navigation property managedDevices in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Assignment Filter Evaluation Status Details",
					"value": "Device Management Managed Devices List Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Create Assignment Filter Evaluation Status Details",
					"value": "Device Management Managed Devices Create Assignment Filter Evaluation Status Details",
					"action": "Create new navigation property to assignmentFilterEvaluationStatusDetails for deviceManagement",
					"description": "Create new navigation property to assignmentFilterEvaluationStatusDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Assignment Filter Evaluation Status Details",
					"value": "Device Management Managed Devices Delete Assignment Filter Evaluation Status Details",
					"action": "Delete navigation property assignmentFilterEvaluationStatusDetails for deviceManagement",
					"description": "Delete navigation property assignmentFilterEvaluationStatusDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Assignment Filter Evaluation Status Details",
					"value": "Device Management Managed Devices Get Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Assignment Filter Evaluation Status Details",
					"value": "Device Management Managed Devices Update Assignment Filter Evaluation Status Details",
					"action": "Update the navigation property assignmentFilterEvaluationStatusDetails in deviceManagement",
					"description": "Update the navigation property assignmentFilterEvaluationStatusDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Detected Apps",
					"value": "Device Management Managed Devices List Detected Apps",
					"action": "Get detectedApps from deviceManagement",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Detected Apps",
					"value": "Device Management Managed Devices Get Detected Apps",
					"action": "Get detectedApps from deviceManagement",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps/{{$parameter[\"detectedApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Device Category",
					"value": "Device Management Managed Devices Delete Device Category",
					"action": "Delete navigation property deviceCategory for deviceManagement",
					"description": "Delete navigation property deviceCategory for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Device Category",
					"value": "Device Management Managed Devices Get Device Category",
					"action": "Get deviceCategory from deviceManagement",
					"description": "Device category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Device Category",
					"value": "Device Management Managed Devices Update Device Category",
					"action": "Update the navigation property deviceCategory in deviceManagement",
					"description": "Update the navigation property deviceCategory in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Device Compliance Policy States",
					"value": "Device Management Managed Devices List Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from deviceManagement",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Create Device Compliance Policy States",
					"value": "Device Management Managed Devices Create Device Compliance Policy States",
					"action": "Create new navigation property to deviceCompliancePolicyStates for deviceManagement",
					"description": "Create new navigation property to deviceCompliancePolicyStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Device Compliance Policy States",
					"value": "Device Management Managed Devices Delete Device Compliance Policy States",
					"action": "Delete navigation property deviceCompliancePolicyStates for deviceManagement",
					"description": "Delete navigation property deviceCompliancePolicyStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Device Compliance Policy States",
					"value": "Device Management Managed Devices Get Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from deviceManagement",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Device Compliance Policy States",
					"value": "Device Management Managed Devices Update Device Compliance Policy States",
					"action": "Update the navigation property deviceCompliancePolicyStates in deviceManagement",
					"description": "Update the navigation property deviceCompliancePolicyStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Device Configuration States",
					"value": "Device Management Managed Devices List Device Configuration States",
					"action": "Get deviceConfigurationStates from deviceManagement",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Create Device Configuration States",
					"value": "Device Management Managed Devices Create Device Configuration States",
					"action": "Create new navigation property to deviceConfigurationStates for deviceManagement",
					"description": "Create new navigation property to deviceConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Device Configuration States",
					"value": "Device Management Managed Devices Delete Device Configuration States",
					"action": "Delete navigation property deviceConfigurationStates for deviceManagement",
					"description": "Delete navigation property deviceConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Device Configuration States",
					"value": "Device Management Managed Devices Get Device Configuration States",
					"action": "Get deviceConfigurationStates from deviceManagement",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Device Configuration States",
					"value": "Device Management Managed Devices Update Device Configuration States",
					"action": "Update the navigation property deviceConfigurationStates in deviceManagement",
					"description": "Update the navigation property deviceConfigurationStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Device Health Script States",
					"value": "Device Management Managed Devices List Device Health Script States",
					"action": "Get deviceHealthScriptStates from deviceManagement",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Device Health Script States",
					"value": "Device Management Managed Devices Get Device Health Script States",
					"action": "Get deviceHealthScriptStates from deviceManagement",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates/id='{{$parameter[\"id\"]}}',policyId='{{$parameter[\"policyId\"]}}',deviceId='{{$parameter[\"deviceId\"]}}'"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Log Collection Requests",
					"value": "Device Management Managed Devices List Log Collection Requests",
					"action": "Get logCollectionRequests from deviceManagement",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Create Log Collection Requests",
					"value": "Device Management Managed Devices Create Log Collection Requests",
					"action": "Create new navigation property to logCollectionRequests for deviceManagement",
					"description": "Create new navigation property to logCollectionRequests for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Log Collection Requests",
					"value": "Device Management Managed Devices Delete Log Collection Requests",
					"action": "Delete navigation property logCollectionRequests for deviceManagement",
					"description": "Delete navigation property logCollectionRequests for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Log Collection Requests",
					"value": "Device Management Managed Devices Get Log Collection Requests",
					"action": "Get logCollectionRequests from deviceManagement",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Log Collection Requests",
					"value": "Device Management Managed Devices Update Log Collection Requests",
					"action": "Update the navigation property logCollectionRequests in deviceManagement",
					"description": "Update the navigation property logCollectionRequests in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Managed Device Mobile App Configuration States",
					"value": "Device Management Managed Devices List Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Create Managed Device Mobile App Configuration States",
					"value": "Device Management Managed Devices Create Managed Device Mobile App Configuration States",
					"action": "Create new navigation property to managedDeviceMobileAppConfigurationStates for deviceManagement",
					"description": "Create new navigation property to managedDeviceMobileAppConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Managed Device Mobile App Configuration States",
					"value": "Device Management Managed Devices Delete Managed Device Mobile App Configuration States",
					"action": "Delete navigation property managedDeviceMobileAppConfigurationStates for deviceManagement",
					"description": "Delete navigation property managedDeviceMobileAppConfigurationStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Managed Device Mobile App Configuration States",
					"value": "Device Management Managed Devices Get Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from deviceManagement",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Managed Device Mobile App Configuration States",
					"value": "Device Management Managed Devices Update Managed Device Mobile App Configuration States",
					"action": "Update the navigation property managedDeviceMobileAppConfigurationStates in deviceManagement",
					"description": "Update the navigation property managedDeviceMobileAppConfigurationStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Security Baseline States",
					"value": "Device Management Managed Devices List Security Baseline States",
					"action": "Get securityBaselineStates from deviceManagement",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Create Security Baseline States",
					"value": "Device Management Managed Devices Create Security Baseline States",
					"action": "Create new navigation property to securityBaselineStates for deviceManagement",
					"description": "Create new navigation property to securityBaselineStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Security Baseline States",
					"value": "Device Management Managed Devices Delete Security Baseline States",
					"action": "Delete navigation property securityBaselineStates for deviceManagement",
					"description": "Delete navigation property securityBaselineStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Security Baseline States",
					"value": "Device Management Managed Devices Get Security Baseline States",
					"action": "Get securityBaselineStates from deviceManagement",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Security Baseline States",
					"value": "Device Management Managed Devices Update Security Baseline States",
					"action": "Update the navigation property securityBaselineStates in deviceManagement",
					"description": "Update the navigation property securityBaselineStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Security Baseline States List Setting States",
					"value": "Device Management Managed Devices Security Baseline States List Setting States",
					"action": "Get settingStates from deviceManagement",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Security Baseline States Create Setting States",
					"value": "Device Management Managed Devices Security Baseline States Create Setting States",
					"action": "Create new navigation property to settingStates for deviceManagement",
					"description": "Create new navigation property to settingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Security Baseline States Delete Setting States",
					"value": "Device Management Managed Devices Security Baseline States Delete Setting States",
					"action": "Delete navigation property settingStates for deviceManagement",
					"description": "Delete navigation property settingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Security Baseline States Get Setting States",
					"value": "Device Management Managed Devices Security Baseline States Get Setting States",
					"action": "Get settingStates from deviceManagement",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Security Baseline States Update Setting States",
					"value": "Device Management Managed Devices Security Baseline States Update Setting States",
					"action": "Update the navigation property settingStates in deviceManagement",
					"description": "Update the navigation property settingStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices List Users",
					"value": "Device Management Managed Devices List Users",
					"action": "Get users from deviceManagement",
					"description": "The primary users associated with the managed device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/users"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Delete Windows Protection State",
					"value": "Device Management Managed Devices Delete Windows Protection State",
					"action": "Delete navigation property windowsProtectionState for deviceManagement",
					"description": "Delete navigation property windowsProtectionState for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Get Windows Protection State",
					"value": "Device Management Managed Devices Get Windows Protection State",
					"action": "Get windowsProtectionState from deviceManagement",
					"description": "The device protection status. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Update Windows Protection State",
					"value": "Device Management Managed Devices Update Windows Protection State",
					"action": "Update the navigation property windowsProtectionState in deviceManagement",
					"description": "Update the navigation property windowsProtectionState in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Windows Protection State List Detected Malware State",
					"value": "Device Management Managed Devices Windows Protection State List Detected Malware State",
					"action": "Get detectedMalwareState from deviceManagement",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Windows Protection State Create Detected Malware State",
					"value": "Device Management Managed Devices Windows Protection State Create Detected Malware State",
					"action": "Create new navigation property to detectedMalwareState for deviceManagement",
					"description": "Create new navigation property to detectedMalwareState for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Windows Protection State Delete Detected Malware State",
					"value": "Device Management Managed Devices Windows Protection State Delete Detected Malware State",
					"action": "Delete navigation property detectedMalwareState for deviceManagement",
					"description": "Delete navigation property detectedMalwareState for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Windows Protection State Get Detected Malware State",
					"value": "Device Management Managed Devices Windows Protection State Get Detected Malware State",
					"action": "Get detectedMalwareState from deviceManagement",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Managed Devices Windows Protection State Update Detected Malware State",
					"value": "Device Management Managed Devices Windows Protection State Update Detected Malware State",
					"action": "Update the navigation property detectedMalwareState in deviceManagement",
					"description": "Update the navigation property detectedMalwareState in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Create Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Create Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Delete Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Delete Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Get Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Get Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Get Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Update Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Update Comanaged Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Device Category"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCategory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates/id='{id}',policyId='{policyId}',deviceId='{deviceId}'",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Delete Setting States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Delete Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Delete Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Delete Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Delete Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Comanaged Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Create Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Create Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Delete Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Delete Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Get Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Get Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Get Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Update Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Update Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Device Category"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCategory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates/id='{id}',policyId='{policyId}',deviceId='{deviceId}'",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Delete Setting States"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Delete Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Delete Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Delete Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Delete Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device"
					],
					"operation": [
						"Device Management Managed Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
];
