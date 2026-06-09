import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementEmbeddedSimActivationCodePoolDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Embedded SIM Activation Code Pools",
					"value": "Device Management List Embedded SIM Activation Code Pools",
					"action": "Get embeddedSIMActivationCodePools from deviceManagement",
					"description": "The embedded SIM activation code pools created by this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools"
						}
					}
				},
				{
					"name": "Device Management Create Embedded SIM Activation Code Pools",
					"value": "Device Management Create Embedded SIM Activation Code Pools",
					"action": "Create new navigation property to embeddedSIMActivationCodePools for deviceManagement",
					"description": "Create new navigation property to embeddedSIMActivationCodePools for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools"
						}
					}
				},
				{
					"name": "Device Management Delete Embedded SIM Activation Code Pools",
					"value": "Device Management Delete Embedded SIM Activation Code Pools",
					"action": "Delete navigation property embeddedSIMActivationCodePools for deviceManagement",
					"description": "Delete navigation property embeddedSIMActivationCodePools for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Embedded SIM Activation Code Pools",
					"value": "Device Management Get Embedded SIM Activation Code Pools",
					"action": "Get embeddedSIMActivationCodePools from deviceManagement",
					"description": "The embedded SIM activation code pools created by this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Embedded SIM Activation Code Pools",
					"value": "Device Management Update Embedded SIM Activation Code Pools",
					"action": "Update the navigation property embeddedSIMActivationCodePools in deviceManagement",
					"description": "Update the navigation property embeddedSIMActivationCodePools in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools List Assignments",
					"value": "Device Management Embedded SIM Activation Code Pools List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Navigational property to a list of targets to which this pool is assigned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Create Assignments",
					"value": "Device Management Embedded SIM Activation Code Pools Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Delete Assignments",
					"value": "Device Management Embedded SIM Activation Code Pools Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/assignments/{{$parameter[\"embeddedSIMActivationCodePoolAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Get Assignments",
					"value": "Device Management Embedded SIM Activation Code Pools Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Navigational property to a list of targets to which this pool is assigned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/assignments/{{$parameter[\"embeddedSIMActivationCodePoolAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Update Assignments",
					"value": "Device Management Embedded SIM Activation Code Pools Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/assignments/{{$parameter[\"embeddedSIMActivationCodePoolAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools List Device States",
					"value": "Device Management Embedded SIM Activation Code Pools List Device States",
					"action": "Get deviceStates from deviceManagement",
					"description": "Navigational property to a list of device states for this pool.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Create Device States",
					"value": "Device Management Embedded SIM Activation Code Pools Create Device States",
					"action": "Create new navigation property to deviceStates for deviceManagement",
					"description": "Create new navigation property to deviceStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/deviceStates"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Delete Device States",
					"value": "Device Management Embedded SIM Activation Code Pools Delete Device States",
					"action": "Delete navigation property deviceStates for deviceManagement",
					"description": "Delete navigation property deviceStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/deviceStates/{{$parameter[\"embeddedSIMDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Get Device States",
					"value": "Device Management Embedded SIM Activation Code Pools Get Device States",
					"action": "Get deviceStates from deviceManagement",
					"description": "Navigational property to a list of device states for this pool.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/deviceStates/{{$parameter[\"embeddedSIMDeviceState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Embedded SIM Activation Code Pools Update Device States",
					"value": "Device Management Embedded SIM Activation Code Pools Update Device States",
					"action": "Update the navigation property deviceStates in deviceManagement",
					"description": "Update the navigation property deviceStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/embeddedSIMActivationCodePools/{{$parameter[\"embeddedSIMActivationCodePool-id\"]}}/deviceStates/{{$parameter[\"embeddedSIMDeviceState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/embeddedSIMActivationCodePools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management List Embedded SIM Activation Code Pools"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/embeddedSIMActivationCodePools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Create Embedded SIM Activation Code Pools"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/embeddedSIMActivationCodePools<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Create Embedded SIM Activation Code Pools"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Delete Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Delete Embedded SIM Activation Code Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Get Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Get Embedded SIM Activation Code Pools"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Get Embedded SIM Activation Code Pools"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Update Embedded SIM Activation Code Pools"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Update Embedded SIM Activation Code Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Delete Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Get Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Get Assignments"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/assignments/{embeddedSIMActivationCodePoolAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools List Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Create Device States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Create Device States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Delete Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Delete Device States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Get Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Get Device States"
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
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Get Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Update Device States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Embedded SIM Activation Code Pool"
					],
					"operation": [
						"Device Management Embedded SIM Activation Code Pools Update Device States"
					]
				}
			}
		},
];
