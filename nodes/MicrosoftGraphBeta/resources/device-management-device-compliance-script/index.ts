import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceComplianceScriptDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Compliance Scripts",
					"value": "Device Management List Device Compliance Scripts",
					"action": "Get deviceComplianceScripts from deviceManagement",
					"description": "The list of device compliance scripts associated with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts"
						}
					}
				},
				{
					"name": "Device Management Create Device Compliance Scripts",
					"value": "Device Management Create Device Compliance Scripts",
					"action": "Create new navigation property to deviceComplianceScripts for deviceManagement",
					"description": "Create new navigation property to deviceComplianceScripts for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceComplianceScripts"
						}
					}
				},
				{
					"name": "Device Management Delete Device Compliance Scripts",
					"value": "Device Management Delete Device Compliance Scripts",
					"action": "Delete navigation property deviceComplianceScripts for deviceManagement",
					"description": "Delete navigation property deviceComplianceScripts for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Compliance Scripts",
					"value": "Device Management Get Device Compliance Scripts",
					"action": "Get deviceComplianceScripts from deviceManagement",
					"description": "The list of device compliance scripts associated with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Compliance Scripts",
					"value": "Device Management Update Device Compliance Scripts",
					"action": "Update the navigation property deviceComplianceScripts in deviceManagement",
					"description": "Update the navigation property deviceComplianceScripts in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts List Assignments",
					"value": "Device Management Device Compliance Scripts List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the device compliance script",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Create Assignments",
					"value": "Device Management Device Compliance Scripts Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Delete Assignments",
					"value": "Device Management Device Compliance Scripts Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/assignments/{{$parameter[\"deviceHealthScriptAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Get Assignments",
					"value": "Device Management Device Compliance Scripts Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of group assignments for the device compliance script",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/assignments/{{$parameter[\"deviceHealthScriptAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Update Assignments",
					"value": "Device Management Device Compliance Scripts Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/assignments/{{$parameter[\"deviceHealthScriptAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts List Device Run States",
					"value": "Device Management Device Compliance Scripts List Device Run States",
					"action": "Get deviceRunStates from deviceManagement",
					"description": "List of run states for the device compliance script across all devices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/deviceRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Create Device Run States",
					"value": "Device Management Device Compliance Scripts Create Device Run States",
					"action": "Create new navigation property to deviceRunStates for deviceManagement",
					"description": "Create new navigation property to deviceRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/deviceRunStates"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Delete Device Run States",
					"value": "Device Management Device Compliance Scripts Delete Device Run States",
					"action": "Delete navigation property deviceRunStates for deviceManagement",
					"description": "Delete navigation property deviceRunStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceComplianceScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Get Device Run States",
					"value": "Device Management Device Compliance Scripts Get Device Run States",
					"action": "Get deviceRunStates from deviceManagement",
					"description": "List of run states for the device compliance script across all devices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceComplianceScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Update Device Run States",
					"value": "Device Management Device Compliance Scripts Update Device Run States",
					"action": "Update the navigation property deviceRunStates in deviceManagement",
					"description": "Update the navigation property deviceRunStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceComplianceScriptDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Device Run States Get Managed Device",
					"value": "Device Management Device Compliance Scripts Device Run States Get Managed Device",
					"action": "Get managedDevice from deviceManagement",
					"description": "The managed device on which the device compliance script executed",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/deviceRunStates/{{$parameter[\"deviceComplianceScriptDeviceState-id\"]}}/managedDevice"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Delete Run Summary",
					"value": "Device Management Device Compliance Scripts Delete Run Summary",
					"action": "Delete navigation property runSummary for deviceManagement",
					"description": "Delete navigation property runSummary for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/runSummary"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Get Run Summary",
					"value": "Device Management Device Compliance Scripts Get Run Summary",
					"action": "Get runSummary from deviceManagement",
					"description": "High level run summary for device compliance script.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/runSummary"
						}
					}
				},
				{
					"name": "Device Management Device Compliance Scripts Update Run Summary",
					"value": "Device Management Device Compliance Scripts Update Run Summary",
					"action": "Update the navigation property runSummary in deviceManagement",
					"description": "Update the navigation property runSummary in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceComplianceScripts/{{$parameter[\"deviceComplianceScript-id\"]}}/runSummary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management List Device Compliance Scripts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceComplianceScripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Create Device Compliance Scripts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceComplianceScripts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Create Device Compliance Scripts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Delete Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Delete Device Compliance Scripts"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Get Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Get Device Compliance Scripts"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Get Device Compliance Scripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Update Device Compliance Scripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Update Device Compliance Scripts"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Delete Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Assignments"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts List Device Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Create Device Run States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Create Device Run States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Delete Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Delete Device Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Device Run States"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Device Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Update Device Run States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Update Device Run States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Device Run States Get Managed Device"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Device Run States Get Managed Device"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Device Run States Get Managed Device"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Delete Run Summary"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Delete Run Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Run Summary"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Run Summary"
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
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Get Run Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Update Run Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Script"
					],
					"operation": [
						"Device Management Device Compliance Scripts Update Run Summary"
					]
				}
			}
		},
];
