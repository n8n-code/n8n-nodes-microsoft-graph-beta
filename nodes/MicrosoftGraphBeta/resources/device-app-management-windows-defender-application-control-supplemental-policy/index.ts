import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementWindowsDefenderApplicationControlSupplementalPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Wdac Supplemental Policies",
					"value": "Device App Management List Wdac Supplemental Policies",
					"action": "Get wdacSupplementalPolicies from deviceAppManagement",
					"description": "The collection of Windows Defender Application Control Supplemental Policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies"
						}
					}
				},
				{
					"name": "Device App Management Create Wdac Supplemental Policies",
					"value": "Device App Management Create Wdac Supplemental Policies",
					"action": "Create new navigation property to wdacSupplementalPolicies for deviceAppManagement",
					"description": "Create new navigation property to wdacSupplementalPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies"
						}
					}
				},
				{
					"name": "Device App Management Delete Wdac Supplemental Policies",
					"value": "Device App Management Delete Wdac Supplemental Policies",
					"action": "Delete navigation property wdacSupplementalPolicies for deviceAppManagement",
					"description": "Delete navigation property wdacSupplementalPolicies for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Wdac Supplemental Policies",
					"value": "Device App Management Get Wdac Supplemental Policies",
					"action": "Get wdacSupplementalPolicies from deviceAppManagement",
					"description": "The collection of Windows Defender Application Control Supplemental Policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Wdac Supplemental Policies",
					"value": "Device App Management Update Wdac Supplemental Policies",
					"action": "Update the navigation property wdacSupplementalPolicies in deviceAppManagement",
					"description": "Update the navigation property wdacSupplementalPolicies in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies List Assignments",
					"value": "Device App Management Wdac Supplemental Policies List Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The associated group assignments for this WindowsDefenderApplicationControl supplemental policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Create Assignments",
					"value": "Device App Management Wdac Supplemental Policies Create Assignments",
					"action": "Create new navigation property to assignments for deviceAppManagement",
					"description": "Create new navigation property to assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Delete Assignments",
					"value": "Device App Management Wdac Supplemental Policies Delete Assignments",
					"action": "Delete navigation property assignments for deviceAppManagement",
					"description": "Delete navigation property assignments for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/assignments/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Get Assignments",
					"value": "Device App Management Wdac Supplemental Policies Get Assignments",
					"action": "Get assignments from deviceAppManagement",
					"description": "The associated group assignments for this WindowsDefenderApplicationControl supplemental policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/assignments/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Update Assignments",
					"value": "Device App Management Wdac Supplemental Policies Update Assignments",
					"action": "Update the navigation property assignments in deviceAppManagement",
					"description": "Update the navigation property assignments in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/assignments/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Delete Deploy Summary",
					"value": "Device App Management Wdac Supplemental Policies Delete Deploy Summary",
					"action": "Delete navigation property deploySummary for deviceAppManagement",
					"description": "Delete navigation property deploySummary for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deploySummary"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Get Deploy Summary",
					"value": "Device App Management Wdac Supplemental Policies Get Deploy Summary",
					"action": "Get deploySummary from deviceAppManagement",
					"description": "WindowsDefenderApplicationControl supplemental policy deployment summary.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deploySummary"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Update Deploy Summary",
					"value": "Device App Management Wdac Supplemental Policies Update Deploy Summary",
					"action": "Update the navigation property deploySummary in deviceAppManagement",
					"description": "Update the navigation property deploySummary in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deploySummary"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies List Device Statuses",
					"value": "Device App Management Wdac Supplemental Policies List Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The list of device deployment states for this WindowsDefenderApplicationControl supplemental policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Create Device Statuses",
					"value": "Device App Management Wdac Supplemental Policies Create Device Statuses",
					"action": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"description": "Create new navigation property to deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deviceStatuses"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Delete Device Statuses",
					"value": "Device App Management Wdac Supplemental Policies Delete Device Statuses",
					"action": "Delete navigation property deviceStatuses for deviceAppManagement",
					"description": "Delete navigation property deviceStatuses for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deviceStatuses/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Get Device Statuses",
					"value": "Device App Management Wdac Supplemental Policies Get Device Statuses",
					"action": "Get deviceStatuses from deviceAppManagement",
					"description": "The list of device deployment states for this WindowsDefenderApplicationControl supplemental policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deviceStatuses/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Update Device Statuses",
					"value": "Device App Management Wdac Supplemental Policies Update Device Statuses",
					"action": "Update the navigation property deviceStatuses in deviceAppManagement",
					"description": "Update the navigation property deviceStatuses in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deviceStatuses/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Wdac Supplemental Policies Device Statuses Get Policy",
					"value": "Device App Management Wdac Supplemental Policies Device Statuses Get Policy",
					"action": "Get policy from deviceAppManagement",
					"description": "The navigation link to the WindowsDefenderApplicationControl supplemental policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/wdacSupplementalPolicies/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicy-id\"]}}/deviceStatuses/{{$parameter[\"windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id\"]}}/policy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management List Wdac Supplemental Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/wdacSupplementalPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Create Wdac Supplemental Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/wdacSupplementalPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Create Wdac Supplemental Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Delete Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Delete Wdac Supplemental Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Get Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Get Wdac Supplemental Policies"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Get Wdac Supplemental Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Update Wdac Supplemental Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Update Wdac Supplemental Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Delete Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Assignments"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Delete Deploy Summary"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Delete Deploy Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Deploy Summary"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Deploy Summary"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Deploy Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Update Deploy Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Update Deploy Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies List Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Create Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Delete Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Delete Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Device Statuses"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Get Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Update Device Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Device Statuses Get Policy"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Device Statuses Get Policy"
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
						"Device App Management Windows Defender Application Control Supplemental Policy"
					],
					"operation": [
						"Device App Management Wdac Supplemental Policies Device Statuses Get Policy"
					]
				}
			}
		},
];
