import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementAutopilotEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Autopilot Events",
					"value": "Device Management List Autopilot Events",
					"action": "Get autopilotEvents from deviceManagement",
					"description": "The list of autopilot events for the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/autopilotEvents"
						}
					}
				},
				{
					"name": "Device Management Create Autopilot Events",
					"value": "Device Management Create Autopilot Events",
					"action": "Create new navigation property to autopilotEvents for deviceManagement",
					"description": "Create new navigation property to autopilotEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/autopilotEvents"
						}
					}
				},
				{
					"name": "Device Management Delete Autopilot Events",
					"value": "Device Management Delete Autopilot Events",
					"action": "Delete navigation property autopilotEvents for deviceManagement",
					"description": "Delete navigation property autopilotEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Autopilot Events",
					"value": "Device Management Get Autopilot Events",
					"action": "Get autopilotEvents from deviceManagement",
					"description": "The list of autopilot events for the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Autopilot Events",
					"value": "Device Management Update Autopilot Events",
					"action": "Update the navigation property autopilotEvents in deviceManagement",
					"description": "Update the navigation property autopilotEvents in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Autopilot Events List Policy Status Details",
					"value": "Device Management Autopilot Events List Policy Status Details",
					"action": "Get policyStatusDetails from deviceManagement",
					"description": "Policy and application status details for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}/policyStatusDetails"
						}
					}
				},
				{
					"name": "Device Management Autopilot Events Create Policy Status Details",
					"value": "Device Management Autopilot Events Create Policy Status Details",
					"action": "Create new navigation property to policyStatusDetails for deviceManagement",
					"description": "Create new navigation property to policyStatusDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}/policyStatusDetails"
						}
					}
				},
				{
					"name": "Device Management Autopilot Events Delete Policy Status Details",
					"value": "Device Management Autopilot Events Delete Policy Status Details",
					"action": "Delete navigation property policyStatusDetails for deviceManagement",
					"description": "Delete navigation property policyStatusDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}/policyStatusDetails/{{$parameter[\"deviceManagementAutopilotPolicyStatusDetail-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Autopilot Events Get Policy Status Details",
					"value": "Device Management Autopilot Events Get Policy Status Details",
					"action": "Get policyStatusDetails from deviceManagement",
					"description": "Policy and application status details for this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}/policyStatusDetails/{{$parameter[\"deviceManagementAutopilotPolicyStatusDetail-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Autopilot Events Update Policy Status Details",
					"value": "Device Management Autopilot Events Update Policy Status Details",
					"action": "Update the navigation property policyStatusDetails in deviceManagement",
					"description": "Update the navigation property policyStatusDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/autopilotEvents/{{$parameter[\"deviceManagementAutopilotEvent-id\"]}}/policyStatusDetails/{{$parameter[\"deviceManagementAutopilotPolicyStatusDetail-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/autopilotEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management List Autopilot Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/autopilotEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Create Autopilot Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/autopilotEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Create Autopilot Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Delete Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Delete Autopilot Events"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Get Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Get Autopilot Events"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Get Autopilot Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Update Autopilot Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Update Autopilot Events"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}/policyStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events List Policy Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}/policyStatusDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Create Policy Status Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}/policyStatusDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Create Policy Status Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}/policyStatusDetails/{deviceManagementAutopilotPolicyStatusDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Delete Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Delete Policy Status Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}/policyStatusDetails/{deviceManagementAutopilotPolicyStatusDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Get Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Get Policy Status Details"
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
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Get Policy Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}/policyStatusDetails/{deviceManagementAutopilotPolicyStatusDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Update Policy Status Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/autopilotEvents/{deviceManagementAutopilotEvent-id}/policyStatusDetails/{deviceManagementAutopilotPolicyStatusDetail-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Autopilot Event"
					],
					"operation": [
						"Device Management Autopilot Events Update Policy Status Details"
					]
				}
			}
		},
];
