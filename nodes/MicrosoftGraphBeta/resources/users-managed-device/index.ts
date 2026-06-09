import type { INodeProperties } from 'n8n-workflow';

export const usersManagedDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					]
				}
			},
			"options": [
				{
					"name": "Users List Managed Devices",
					"value": "Users List Managed Devices",
					"action": "Get managedDevices from users",
					"description": "The managed devices associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices"
						}
					}
				},
				{
					"name": "Users Create Managed Devices",
					"value": "Users Create Managed Devices",
					"action": "Create new navigation property to managedDevices for users",
					"description": "Create new navigation property to managedDevices for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices"
						}
					}
				},
				{
					"name": "Users Delete Managed Devices",
					"value": "Users Delete Managed Devices",
					"action": "Delete navigation property managedDevices for users",
					"description": "Delete navigation property managedDevices for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Managed Devices",
					"value": "Users Get Managed Devices",
					"action": "Get managedDevices from users",
					"description": "The managed devices associated with the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Managed Devices",
					"value": "Users Update Managed Devices",
					"action": "Update the navigation property managedDevices in users",
					"description": "Update the navigation property managedDevices in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices List Assignment Filter Evaluation Status Details",
					"value": "Users Managed Devices List Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from users",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Users Managed Devices Create Assignment Filter Evaluation Status Details",
					"value": "Users Managed Devices Create Assignment Filter Evaluation Status Details",
					"action": "Create new navigation property to assignmentFilterEvaluationStatusDetails for users",
					"description": "Create new navigation property to assignmentFilterEvaluationStatusDetails for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Assignment Filter Evaluation Status Details",
					"value": "Users Managed Devices Delete Assignment Filter Evaluation Status Details",
					"action": "Delete navigation property assignmentFilterEvaluationStatusDetails for users",
					"description": "Delete navigation property assignmentFilterEvaluationStatusDetails for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Assignment Filter Evaluation Status Details",
					"value": "Users Managed Devices Get Assignment Filter Evaluation Status Details",
					"action": "Get assignmentFilterEvaluationStatusDetails from users",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Assignment Filter Evaluation Status Details",
					"value": "Users Managed Devices Update Assignment Filter Evaluation Status Details",
					"action": "Update the navigation property assignmentFilterEvaluationStatusDetails in users",
					"description": "Update the navigation property assignmentFilterEvaluationStatusDetails in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/assignmentFilterEvaluationStatusDetails/{{$parameter[\"assignmentFilterEvaluationStatusDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices List Detected Apps",
					"value": "Users Managed Devices List Detected Apps",
					"action": "Get detectedApps from users",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Detected Apps",
					"value": "Users Managed Devices Get Detected Apps",
					"action": "Get detectedApps from users",
					"description": "All applications currently installed on the device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/detectedApps/{{$parameter[\"detectedApp-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Device Category",
					"value": "Users Managed Devices Delete Device Category",
					"action": "Delete navigation property deviceCategory for users",
					"description": "Delete navigation property deviceCategory for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Device Category",
					"value": "Users Managed Devices Get Device Category",
					"action": "Get deviceCategory from users",
					"description": "Device category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Device Category",
					"value": "Users Managed Devices Update Device Category",
					"action": "Update the navigation property deviceCategory in users",
					"description": "Update the navigation property deviceCategory in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCategory"
						}
					}
				},
				{
					"name": "Users Managed Devices List Device Compliance Policy States",
					"value": "Users Managed Devices List Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from users",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Create Device Compliance Policy States",
					"value": "Users Managed Devices Create Device Compliance Policy States",
					"action": "Create new navigation property to deviceCompliancePolicyStates for users",
					"description": "Create new navigation property to deviceCompliancePolicyStates for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Device Compliance Policy States",
					"value": "Users Managed Devices Delete Device Compliance Policy States",
					"action": "Delete navigation property deviceCompliancePolicyStates for users",
					"description": "Delete navigation property deviceCompliancePolicyStates for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Device Compliance Policy States",
					"value": "Users Managed Devices Get Device Compliance Policy States",
					"action": "Get deviceCompliancePolicyStates from users",
					"description": "Device compliance policy states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Device Compliance Policy States",
					"value": "Users Managed Devices Update Device Compliance Policy States",
					"action": "Update the navigation property deviceCompliancePolicyStates in users",
					"description": "Update the navigation property deviceCompliancePolicyStates in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceCompliancePolicyStates/{{$parameter[\"deviceCompliancePolicyState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices List Device Configuration States",
					"value": "Users Managed Devices List Device Configuration States",
					"action": "Get deviceConfigurationStates from users",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Create Device Configuration States",
					"value": "Users Managed Devices Create Device Configuration States",
					"action": "Create new navigation property to deviceConfigurationStates for users",
					"description": "Create new navigation property to deviceConfigurationStates for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Device Configuration States",
					"value": "Users Managed Devices Delete Device Configuration States",
					"action": "Delete navigation property deviceConfigurationStates for users",
					"description": "Delete navigation property deviceConfigurationStates for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Device Configuration States",
					"value": "Users Managed Devices Get Device Configuration States",
					"action": "Get deviceConfigurationStates from users",
					"description": "Device configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Device Configuration States",
					"value": "Users Managed Devices Update Device Configuration States",
					"action": "Update the navigation property deviceConfigurationStates in users",
					"description": "Update the navigation property deviceConfigurationStates in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceConfigurationStates/{{$parameter[\"deviceConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices List Device Health Script States",
					"value": "Users Managed Devices List Device Health Script States",
					"action": "Get deviceHealthScriptStates from users",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Device Health Script States",
					"value": "Users Managed Devices Get Device Health Script States",
					"action": "Get deviceHealthScriptStates from users",
					"description": "Results of device health scripts that ran for this device. Default is empty list. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/deviceHealthScriptStates/id='{{$parameter[\"id\"]}}',policyId='{{$parameter[\"policyId\"]}}',deviceId='{{$parameter[\"deviceId\"]}}'"
						}
					}
				},
				{
					"name": "Users Managed Devices List Log Collection Requests",
					"value": "Users Managed Devices List Log Collection Requests",
					"action": "Get logCollectionRequests from users",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Users Managed Devices Create Log Collection Requests",
					"value": "Users Managed Devices Create Log Collection Requests",
					"action": "Create new navigation property to logCollectionRequests for users",
					"description": "Create new navigation property to logCollectionRequests for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Log Collection Requests",
					"value": "Users Managed Devices Delete Log Collection Requests",
					"action": "Delete navigation property logCollectionRequests for users",
					"description": "Delete navigation property logCollectionRequests for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Log Collection Requests",
					"value": "Users Managed Devices Get Log Collection Requests",
					"action": "Get logCollectionRequests from users",
					"description": "List of log collection requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Log Collection Requests",
					"value": "Users Managed Devices Update Log Collection Requests",
					"action": "Update the navigation property logCollectionRequests in users",
					"description": "Update the navigation property logCollectionRequests in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/logCollectionRequests/{{$parameter[\"deviceLogCollectionResponse-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices List Managed Device Mobile App Configuration States",
					"value": "Users Managed Devices List Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from users",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Create Managed Device Mobile App Configuration States",
					"value": "Users Managed Devices Create Managed Device Mobile App Configuration States",
					"action": "Create new navigation property to managedDeviceMobileAppConfigurationStates for users",
					"description": "Create new navigation property to managedDeviceMobileAppConfigurationStates for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Managed Device Mobile App Configuration States",
					"value": "Users Managed Devices Delete Managed Device Mobile App Configuration States",
					"action": "Delete navigation property managedDeviceMobileAppConfigurationStates for users",
					"description": "Delete navigation property managedDeviceMobileAppConfigurationStates for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Managed Device Mobile App Configuration States",
					"value": "Users Managed Devices Get Managed Device Mobile App Configuration States",
					"action": "Get managedDeviceMobileAppConfigurationStates from users",
					"description": "Managed device mobile app configuration states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Managed Device Mobile App Configuration States",
					"value": "Users Managed Devices Update Managed Device Mobile App Configuration States",
					"action": "Update the navigation property managedDeviceMobileAppConfigurationStates in users",
					"description": "Update the navigation property managedDeviceMobileAppConfigurationStates in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/managedDeviceMobileAppConfigurationStates/{{$parameter[\"managedDeviceMobileAppConfigurationState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices List Security Baseline States",
					"value": "Users Managed Devices List Security Baseline States",
					"action": "Get securityBaselineStates from users",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Create Security Baseline States",
					"value": "Users Managed Devices Create Security Baseline States",
					"action": "Create new navigation property to securityBaselineStates for users",
					"description": "Create new navigation property to securityBaselineStates for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Security Baseline States",
					"value": "Users Managed Devices Delete Security Baseline States",
					"action": "Delete navigation property securityBaselineStates for users",
					"description": "Delete navigation property securityBaselineStates for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Security Baseline States",
					"value": "Users Managed Devices Get Security Baseline States",
					"action": "Get securityBaselineStates from users",
					"description": "Security baseline states for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Security Baseline States",
					"value": "Users Managed Devices Update Security Baseline States",
					"action": "Update the navigation property securityBaselineStates in users",
					"description": "Update the navigation property securityBaselineStates in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Security Baseline States List Setting States",
					"value": "Users Managed Devices Security Baseline States List Setting States",
					"action": "Get settingStates from users",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Security Baseline States Create Setting States",
					"value": "Users Managed Devices Security Baseline States Create Setting States",
					"action": "Create new navigation property to settingStates for users",
					"description": "Create new navigation property to settingStates for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates"
						}
					}
				},
				{
					"name": "Users Managed Devices Security Baseline States Delete Setting States",
					"value": "Users Managed Devices Security Baseline States Delete Setting States",
					"action": "Delete navigation property settingStates for users",
					"description": "Delete navigation property settingStates for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Security Baseline States Get Setting States",
					"value": "Users Managed Devices Security Baseline States Get Setting States",
					"action": "Get settingStates from users",
					"description": "The security baseline state for different settings for a device",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Security Baseline States Update Setting States",
					"value": "Users Managed Devices Security Baseline States Update Setting States",
					"action": "Update the navigation property settingStates in users",
					"description": "Update the navigation property settingStates in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/securityBaselineStates/{{$parameter[\"securityBaselineState-id\"]}}/settingStates/{{$parameter[\"securityBaselineSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices List Users",
					"value": "Users Managed Devices List Users",
					"action": "Get users from users",
					"description": "The primary users associated with the managed device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/users"
						}
					}
				},
				{
					"name": "Users Managed Devices Delete Windows Protection State",
					"value": "Users Managed Devices Delete Windows Protection State",
					"action": "Delete navigation property windowsProtectionState for users",
					"description": "Delete navigation property windowsProtectionState for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Users Managed Devices Get Windows Protection State",
					"value": "Users Managed Devices Get Windows Protection State",
					"action": "Get windowsProtectionState from users",
					"description": "The device protection status. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Users Managed Devices Update Windows Protection State",
					"value": "Users Managed Devices Update Windows Protection State",
					"action": "Update the navigation property windowsProtectionState in users",
					"description": "Update the navigation property windowsProtectionState in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState"
						}
					}
				},
				{
					"name": "Users Managed Devices Windows Protection State List Detected Malware State",
					"value": "Users Managed Devices Windows Protection State List Detected Malware State",
					"action": "Get detectedMalwareState from users",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Users Managed Devices Windows Protection State Create Detected Malware State",
					"value": "Users Managed Devices Windows Protection State Create Detected Malware State",
					"action": "Create new navigation property to detectedMalwareState for users",
					"description": "Create new navigation property to detectedMalwareState for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState"
						}
					}
				},
				{
					"name": "Users Managed Devices Windows Protection State Delete Detected Malware State",
					"value": "Users Managed Devices Windows Protection State Delete Detected Malware State",
					"action": "Delete navigation property detectedMalwareState for users",
					"description": "Delete navigation property detectedMalwareState for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Windows Protection State Get Detected Malware State",
					"value": "Users Managed Devices Windows Protection State Get Detected Malware State",
					"action": "Get detectedMalwareState from users",
					"description": "Device malware list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				},
				{
					"name": "Users Managed Devices Windows Protection State Update Detected Malware State",
					"value": "Users Managed Devices Windows Protection State Update Detected Malware State",
					"action": "Update the navigation property detectedMalwareState in users",
					"description": "Update the navigation property detectedMalwareState in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}/windowsProtectionState/detectedMalwareState/{{$parameter[\"windowsDeviceMalwareState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Create Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Create Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Delete Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Delete Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Get Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Get Managed Devices"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Get Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Update Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Update Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Assignment Filter Evaluation Status Details"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/assignmentFilterEvaluationStatusDetails/{assignmentFilterEvaluationStatusDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Assignment Filter Evaluation Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/detectedApps/{detectedApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Detected Apps"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Device Category"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Category"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Category"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCategory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Device Category"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Compliance Policy States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Device Compliance Policy States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Device Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates/id='{id}',policyId='{policyId}',deviceId='{deviceId}'",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Health Script States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Device Health Script States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Log Collection Requests"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/logCollectionRequests/{deviceLogCollectionResponse-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Managed Device Mobile App Configuration States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Managed Device Mobile App Configuration States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Create Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Security Baseline States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Security Baseline States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States List Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Create Setting States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Delete Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Delete Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Get Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Get Setting States"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Get Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Security Baseline States Update Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices List Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Windows Protection State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Delete Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Windows Protection State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Windows Protection State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Get Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Update Windows Protection State"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State List Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Create Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Delete Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Delete Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Get Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Get Detected Malware State"
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
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Get Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState/detectedMalwareState/{windowsDeviceMalwareState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Managed Device"
					],
					"operation": [
						"Users Managed Devices Windows Protection State Update Detected Malware State"
					]
				}
			}
		},
];
