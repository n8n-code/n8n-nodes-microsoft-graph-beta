import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceCompliancePolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Compliance Policies",
					"value": "Device Management List Device Compliance Policies",
					"action": "Get deviceCompliancePolicies from deviceManagement",
					"description": "The device compliance policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies"
						}
					}
				},
				{
					"name": "Device Management Create Device Compliance Policies",
					"value": "Device Management Create Device Compliance Policies",
					"action": "Create new navigation property to deviceCompliancePolicies for deviceManagement",
					"description": "Create new navigation property to deviceCompliancePolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies"
						}
					}
				},
				{
					"name": "Device Management Delete Device Compliance Policies",
					"value": "Device Management Delete Device Compliance Policies",
					"action": "Delete navigation property deviceCompliancePolicies for deviceManagement",
					"description": "Delete navigation property deviceCompliancePolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Compliance Policies",
					"value": "Device Management Get Device Compliance Policies",
					"action": "Get deviceCompliancePolicies from deviceManagement",
					"description": "The device compliance policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Compliance Policies",
					"value": "Device Management Update Device Compliance Policies",
					"action": "Update the navigation property deviceCompliancePolicies in deviceManagement",
					"description": "Update the navigation property deviceCompliancePolicies in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies List Assignments",
					"value": "Device Management Device Compliance Policies List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The collection of assignments for this compliance policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Create Assignments",
					"value": "Device Management Device Compliance Policies Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Delete Assignments",
					"value": "Device Management Device Compliance Policies Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/assignments/{{$parameter[\"deviceCompliancePolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get Assignments",
					"value": "Device Management Device Compliance Policies Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The collection of assignments for this compliance policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/assignments/{{$parameter[\"deviceCompliancePolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Update Assignments",
					"value": "Device Management Device Compliance Policies Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/assignments/{{$parameter[\"deviceCompliancePolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies List Device Setting State Summaries",
					"value": "Device Management Device Compliance Policies List Device Setting State Summaries",
					"action": "Get deviceSettingStateSummaries from deviceManagement",
					"description": "Compliance Setting State Device Summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceSettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Create Device Setting State Summaries",
					"value": "Device Management Device Compliance Policies Create Device Setting State Summaries",
					"action": "Create new navigation property to deviceSettingStateSummaries for deviceManagement",
					"description": "Create new navigation property to deviceSettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceSettingStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Delete Device Setting State Summaries",
					"value": "Device Management Device Compliance Policies Delete Device Setting State Summaries",
					"action": "Delete navigation property deviceSettingStateSummaries for deviceManagement",
					"description": "Delete navigation property deviceSettingStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"settingStateDeviceSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get Device Setting State Summaries",
					"value": "Device Management Device Compliance Policies Get Device Setting State Summaries",
					"action": "Get deviceSettingStateSummaries from deviceManagement",
					"description": "Compliance Setting State Device Summary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"settingStateDeviceSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Update Device Setting State Summaries",
					"value": "Device Management Device Compliance Policies Update Device Setting State Summaries",
					"action": "Update the navigation property deviceSettingStateSummaries in deviceManagement",
					"description": "Update the navigation property deviceSettingStateSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceSettingStateSummaries/{{$parameter[\"settingStateDeviceSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Delete Device Status Overview",
					"value": "Device Management Device Compliance Policies Delete Device Status Overview",
					"action": "Delete navigation property deviceStatusOverview for deviceManagement",
					"description": "Delete navigation property deviceStatusOverview for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get Device Status Overview",
					"value": "Device Management Device Compliance Policies Get Device Status Overview",
					"action": "Get deviceStatusOverview from deviceManagement",
					"description": "Device compliance devices status overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Update Device Status Overview",
					"value": "Device Management Device Compliance Policies Update Device Status Overview",
					"action": "Update the navigation property deviceStatusOverview in deviceManagement",
					"description": "Update the navigation property deviceStatusOverview in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies List Device Statuses",
					"value": "Device Management Device Compliance Policies List Device Statuses",
					"action": "Get deviceStatuses from deviceManagement",
					"description": "List of DeviceComplianceDeviceStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Create Device Statuses",
					"value": "Device Management Device Compliance Policies Create Device Statuses",
					"action": "Create new navigation property to deviceStatuses for deviceManagement",
					"description": "Create new navigation property to deviceStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Delete Device Statuses",
					"value": "Device Management Device Compliance Policies Delete Device Statuses",
					"action": "Delete navigation property deviceStatuses for deviceManagement",
					"description": "Delete navigation property deviceStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatuses/{{$parameter[\"deviceComplianceDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get Device Statuses",
					"value": "Device Management Device Compliance Policies Get Device Statuses",
					"action": "Get deviceStatuses from deviceManagement",
					"description": "List of DeviceComplianceDeviceStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatuses/{{$parameter[\"deviceComplianceDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Update Device Statuses",
					"value": "Device Management Device Compliance Policies Update Device Statuses",
					"action": "Update the navigation property deviceStatuses in deviceManagement",
					"description": "Update the navigation property deviceStatuses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/deviceStatuses/{{$parameter[\"deviceComplianceDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies List Scheduled Actions For Rule",
					"value": "Device Management Device Compliance Policies List Scheduled Actions For Rule",
					"action": "Get scheduledActionsForRule from deviceManagement",
					"description": "The list of scheduled action for this rule",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Create Scheduled Actions For Rule",
					"value": "Device Management Device Compliance Policies Create Scheduled Actions For Rule",
					"action": "Create new navigation property to scheduledActionsForRule for deviceManagement",
					"description": "Create new navigation property to scheduledActionsForRule for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Delete Scheduled Actions For Rule",
					"value": "Device Management Device Compliance Policies Delete Scheduled Actions For Rule",
					"action": "Delete navigation property scheduledActionsForRule for deviceManagement",
					"description": "Delete navigation property scheduledActionsForRule for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get Scheduled Actions For Rule",
					"value": "Device Management Device Compliance Policies Get Scheduled Actions For Rule",
					"action": "Get scheduledActionsForRule from deviceManagement",
					"description": "The list of scheduled action for this rule",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Update Scheduled Actions For Rule",
					"value": "Device Management Device Compliance Policies Update Scheduled Actions For Rule",
					"action": "Update the navigation property scheduledActionsForRule in deviceManagement",
					"description": "Update the navigation property scheduledActionsForRule in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations",
					"value": "Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations",
					"action": "Get scheduledActionConfigurations from deviceManagement",
					"description": "The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations",
					"value": "Device Management Device Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations",
					"action": "Create new navigation property to scheduledActionConfigurations for deviceManagement",
					"description": "Create new navigation property to scheduledActionConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations",
					"value": "Device Management Device Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations",
					"action": "Delete navigation property scheduledActionConfigurations for deviceManagement",
					"description": "Delete navigation property scheduledActionConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations/{{$parameter[\"deviceComplianceActionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations",
					"value": "Device Management Device Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations",
					"action": "Get scheduledActionConfigurations from deviceManagement",
					"description": "The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations/{{$parameter[\"deviceComplianceActionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations",
					"value": "Device Management Device Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations",
					"action": "Update the navigation property scheduledActionConfigurations in deviceManagement",
					"description": "Update the navigation property scheduledActionConfigurations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations/{{$parameter[\"deviceComplianceActionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Delete User Status Overview",
					"value": "Device Management Device Compliance Policies Delete User Status Overview",
					"action": "Delete navigation property userStatusOverview for deviceManagement",
					"description": "Delete navigation property userStatusOverview for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get User Status Overview",
					"value": "Device Management Device Compliance Policies Get User Status Overview",
					"action": "Get userStatusOverview from deviceManagement",
					"description": "Device compliance users status overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Update User Status Overview",
					"value": "Device Management Device Compliance Policies Update User Status Overview",
					"action": "Update the navigation property userStatusOverview in deviceManagement",
					"description": "Update the navigation property userStatusOverview in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatusOverview"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies List User Statuses",
					"value": "Device Management Device Compliance Policies List User Statuses",
					"action": "Get userStatuses from deviceManagement",
					"description": "List of DeviceComplianceUserStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Create User Statuses",
					"value": "Device Management Device Compliance Policies Create User Statuses",
					"action": "Create new navigation property to userStatuses for deviceManagement",
					"description": "Create new navigation property to userStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatuses"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Delete User Statuses",
					"value": "Device Management Device Compliance Policies Delete User Statuses",
					"action": "Delete navigation property userStatuses for deviceManagement",
					"description": "Delete navigation property userStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatuses/{{$parameter[\"deviceComplianceUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Get User Statuses",
					"value": "Device Management Device Compliance Policies Get User Statuses",
					"action": "Get userStatuses from deviceManagement",
					"description": "List of DeviceComplianceUserStatus.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatuses/{{$parameter[\"deviceComplianceUserStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Policies Update User Statuses",
					"value": "Device Management Device Compliance Policies Update User Statuses",
					"action": "Update the navigation property userStatuses in deviceManagement",
					"description": "Update the navigation property userStatuses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicies/{{$parameter[\"deviceCompliancePolicy-id\"]}}/userStatuses/{{$parameter[\"deviceComplianceUserStatus-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management List Device Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Create Device Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Create Device Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Delete Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Delete Device Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Get Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Get Device Compliance Policies"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Get Device Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Update Device Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Update Device Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Assignments"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Setting State Summaries"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Device Setting State Summaries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Device Status Overview"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Status Overview"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Status Overview"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Device Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Scheduled Actions For Rule"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete User Status Overview"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get User Status Overview"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get User Status Overview"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update User Status Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies List User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Create User Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Delete User Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get User Statuses"
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
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Get User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update User Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy"
					],
					"operation": [
						"Device Management Device Compliance Policies Update User Statuses"
					]
				}
			}
		},
];
