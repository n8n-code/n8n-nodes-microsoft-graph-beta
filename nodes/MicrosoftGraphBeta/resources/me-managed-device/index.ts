import type { INodeProperties } from 'n8n-workflow';

export const meManagedDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					]
				}
			},
			"options": [
				{
					"name": "Me List Managed Devices",
					"value": "Me List Managed Devices",
					"action": "Get managedDevices from me",
					"description": "The managed devices associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices"
						}
					}
				},
				{
					"name": "Me Create Managed Devices",
					"value": "Me Create Managed Devices",
					"action": "Create new navigation property to managedDevices for me",
					"description": "Create new navigation property to managedDevices for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices"
						}
					}
				},
				{
					"name": "Me Delete Managed Devices",
					"value": "Me Delete Managed Devices",
					"action": "Delete navigation property managedDevices for me",
					"description": "Delete navigation property managedDevices for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Managed Devices",
					"value": "Me Get Managed Devices",
					"action": "Get managedDevices from me",
					"description": "The managed devices associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Managed Devices",
					"value": "Me Update Managed Devices",
					"action": "Update the navigation property managedDevices in me",
					"description": "Update the navigation property managedDevices in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices List Assignment Filter Evaluation Status Details",
					"value": "Me Managed Devices List Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from me",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Me Managed Devices Create Assignment Filter Evaluation Status Details",
					"value": "Me Managed Devices Create Assignment Filter Evaluation Status Details",
					"action": "Create new navigation property to assignmentFilterEvaluationStatusDetails for me",
					"description": "Create new navigation property to assignmentFilterEvaluationStatusDetails for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Assignment Filter Evaluation Status Details",
					"value": "Me Managed Devices Delete Assignment Filter Evaluation Status Details",
					"action": "Delete navigation property assignmentFilterEvaluationStatusDetails for me",
					"description": "Delete navigation property assignmentFilterEvaluationStatusDetails for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Assignment Filter Evaluation Status Details",
					"value": "Me Managed Devices Get Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from me",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Assignment Filter Evaluation Status Details",
					"value": "Me Managed Devices Update Assignment Filter Evaluation Status Details",
					"action": "Update the navigation property assignmentFilterEvaluationStatusDetails in me",
					"description": "Update the navigation property assignmentFilterEvaluationStatusDetails in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices List Detected Apps",
					"value": "Me Managed Devices List Detected Apps",
					"action": "Get detectedApps from me",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Detected Apps",
					"value": "Me Managed Devices Get Detected Apps",
					"action": "Get detectedApps from me",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps/{{$parameter[\"detectedApp-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Device Category",
					"value": "Me Managed Devices Delete Device Category",
					"action": "Delete navigation property deviceCategory for me",
					"description": "Delete navigation property deviceCategory for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Device Category",
					"value": "Me Managed Devices Get Device Category",
					"action": "Get deviceCategory from me",
					"description": "Device category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Device Category",
					"value": "Me Managed Devices Update Device Category",
					"action": "Update the navigation property deviceCategory in me",
					"description": "Update the navigation property deviceCategory in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Me Managed Devices List Device Compliance Policy States",
					"value": "Me Managed Devices List Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from me",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Create Device Compliance Policy States",
					"value": "Me Managed Devices Create Device Compliance Policy States",
					"action": "Create new navigation property to deviceCompliancePolicyStates for me",
					"description": "Create new navigation property to deviceCompliancePolicyStates for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Device Compliance Policy States",
					"value": "Me Managed Devices Delete Device Compliance Policy States",
					"action": "Delete navigation property deviceCompliancePolicyStates for me",
					"description": "Delete navigation property deviceCompliancePolicyStates for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Device Compliance Policy States",
					"value": "Me Managed Devices Get Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from me",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Device Compliance Policy States",
					"value": "Me Managed Devices Update Device Compliance Policy States",
					"action": "Update the navigation property deviceCompliancePolicyStates in me",
					"description": "Update the navigation property deviceCompliancePolicyStates in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices List Device Configuration States",
					"value": "Me Managed Devices List Device Configuration States",
					"action": "Get deviceConfigurationStates from me",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Create Device Configuration States",
					"value": "Me Managed Devices Create Device Configuration States",
					"action": "Create new navigation property to deviceConfigurationStates for me",
					"description": "Create new navigation property to deviceConfigurationStates for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Device Configuration States",
					"value": "Me Managed Devices Delete Device Configuration States",
					"action": "Delete navigation property deviceConfigurationStates for me",
					"description": "Delete navigation property deviceConfigurationStates for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Device Configuration States",
					"value": "Me Managed Devices Get Device Configuration States",
					"action": "Get deviceConfigurationStates from me",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Device Configuration States",
					"value": "Me Managed Devices Update Device Configuration States",
					"action": "Update the navigation property deviceConfigurationStates in me",
					"description": "Update the navigation property deviceConfigurationStates in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices List Device Health Script States",
					"value": "Me Managed Devices List Device Health Script States",
					"action": "Get deviceHealthScriptStates from me",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Device Health Script States",
					"value": "Me Managed Devices Get Device Health Script States",
					"action": "Get deviceHealthScriptStates from me",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates/id='{{$parameter[\"id\"]}}',policyId='{{$parameter[\"policyId\"]}}',deviceId='{{$parameter[\"deviceId\"]}}'"
						}
					}
				},
				{
					"name": "Me Managed Devices List Log Collection Requests",
					"value": "Me Managed Devices List Log Collection Requests",
					"action": "Get logCollectionRequests from me",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Me Managed Devices Create Log Collection Requests",
					"value": "Me Managed Devices Create Log Collection Requests",
					"action": "Create new navigation property to logCollectionRequests for me",
					"description": "Create new navigation property to logCollectionRequests for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Log Collection Requests",
					"value": "Me Managed Devices Delete Log Collection Requests",
					"action": "Delete navigation property logCollectionRequests for me",
					"description": "Delete navigation property logCollectionRequests for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Log Collection Requests",
					"value": "Me Managed Devices Get Log Collection Requests",
					"action": "Get logCollectionRequests from me",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Log Collection Requests",
					"value": "Me Managed Devices Update Log Collection Requests",
					"action": "Update the navigation property logCollectionRequests in me",
					"description": "Update the navigation property logCollectionRequests in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices List Managed Device Mobile App Configuration States",
					"value": "Me Managed Devices List Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from me",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Create Managed Device Mobile App Configuration States",
					"value": "Me Managed Devices Create Managed Device Mobile App Configuration States",
					"action": "Create new navigation property to managedDeviceMobileAppConfigurationStates for me",
					"description": "Create new navigation property to managedDeviceMobileAppConfigurationStates for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Managed Device Mobile App Configuration States",
					"value": "Me Managed Devices Delete Managed Device Mobile App Configuration States",
					"action": "Delete navigation property managedDeviceMobileAppConfigurationStates for me",
					"description": "Delete navigation property managedDeviceMobileAppConfigurationStates for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Managed Device Mobile App Configuration States",
					"value": "Me Managed Devices Get Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from me",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Managed Device Mobile App Configuration States",
					"value": "Me Managed Devices Update Managed Device Mobile App Configuration States",
					"action": "Update the navigation property managedDeviceMobileAppConfigurationStates in me",
					"description": "Update the navigation property managedDeviceMobileAppConfigurationStates in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices List Security Baseline States",
					"value": "Me Managed Devices List Security Baseline States",
					"action": "Get securityBaselineStates from me",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Create Security Baseline States",
					"value": "Me Managed Devices Create Security Baseline States",
					"action": "Create new navigation property to securityBaselineStates for me",
					"description": "Create new navigation property to securityBaselineStates for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Security Baseline States",
					"value": "Me Managed Devices Delete Security Baseline States",
					"action": "Delete navigation property securityBaselineStates for me",
					"description": "Delete navigation property securityBaselineStates for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Security Baseline States",
					"value": "Me Managed Devices Get Security Baseline States",
					"action": "Get securityBaselineStates from me",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Security Baseline States",
					"value": "Me Managed Devices Update Security Baseline States",
					"action": "Update the navigation property securityBaselineStates in me",
					"description": "Update the navigation property securityBaselineStates in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Security Baseline States List Setting States",
					"value": "Me Managed Devices Security Baseline States List Setting States",
					"action": "Get settingStates from me",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Security Baseline States Create Setting States",
					"value": "Me Managed Devices Security Baseline States Create Setting States",
					"action": "Create new navigation property to settingStates for me",
					"description": "Create new navigation property to settingStates for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Me Managed Devices Security Baseline States Delete Setting States",
					"value": "Me Managed Devices Security Baseline States Delete Setting States",
					"action": "Delete navigation property settingStates for me",
					"description": "Delete navigation property settingStates for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Security Baseline States Get Setting States",
					"value": "Me Managed Devices Security Baseline States Get Setting States",
					"action": "Get settingStates from me",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Security Baseline States Update Setting States",
					"value": "Me Managed Devices Security Baseline States Update Setting States",
					"action": "Update the navigation property settingStates in me",
					"description": "Update the navigation property settingStates in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices List Users",
					"value": "Me Managed Devices List Users",
					"action": "Get users from me",
					"description": "The primary users associated with the managed device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/users"
						}
					}
				},
				{
					"name": "Me Managed Devices Delete Windows Protection State",
					"value": "Me Managed Devices Delete Windows Protection State",
					"action": "Delete navigation property windowsProtectionState for me",
					"description": "Delete navigation property windowsProtectionState for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Me Managed Devices Get Windows Protection State",
					"value": "Me Managed Devices Get Windows Protection State",
					"action": "Get windowsProtectionState from me",
					"description": "The device protection status. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Me Managed Devices Update Windows Protection State",
					"value": "Me Managed Devices Update Windows Protection State",
					"action": "Update the navigation property windowsProtectionState in me",
					"description": "Update the navigation property windowsProtectionState in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Me Managed Devices Windows Protection State List Detected Malware State",
					"value": "Me Managed Devices Windows Protection State List Detected Malware State",
					"action": "Get detectedMalwareState from me",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Me Managed Devices Windows Protection State Create Detected Malware State",
					"value": "Me Managed Devices Windows Protection State Create Detected Malware State",
					"action": "Create new navigation property to detectedMalwareState for me",
					"description": "Create new navigation property to detectedMalwareState for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Me Managed Devices Windows Protection State Delete Detected Malware State",
					"value": "Me Managed Devices Windows Protection State Delete Detected Malware State",
					"action": "Delete navigation property detectedMalwareState for me",
					"description": "Delete navigation property detectedMalwareState for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Windows Protection State Get Detected Malware State",
					"value": "Me Managed Devices Windows Protection State Get Detected Malware State",
					"action": "Get detectedMalwareState from me",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Managed Devices Windows Protection State Update Detected Malware State",
					"value": "Me Managed Devices Windows Protection State Update Detected Malware State",
					"action": "Update the navigation property detectedMalwareState in me",
					"description": "Update the navigation property detectedMalwareState in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/managedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Create Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Create Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Delete Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Delete Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Get Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Get Managed Devices"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Get Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Update Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Update Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Assignment Filter Evaluation Status Details"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/detectedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Detected Apps"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Device Category"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Category"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Category"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/deviceCategory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Compliance Policy States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/deviceHealthScriptStates/id='{id}',policyId='{policyId}',deviceId='{deviceId}'",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Health Script States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/logCollectionRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Log Collection Requests"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Managed Device Mobile App Configuration States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/securityBaselineStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Security Baseline States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Delete Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Delete Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Get Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Get Setting States"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Windows Protection State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Delete Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Windows Protection State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Windows Protection State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Delete Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Delete Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Get Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Get Detected Malware State"
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
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Managed Device"
					],
					"operation": [
						"Me Managed Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
];
