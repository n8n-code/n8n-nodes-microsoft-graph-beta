import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementTermsAndConditionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Terms And Conditions",
					"value": "Device Management List Terms And Conditions",
					"action": "Get termsAndConditions from deviceManagement",
					"description": "The terms and conditions associated with device management of the company.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions"
						}
					}
				},
				{
					"name": "Device Management Create Terms And Conditions",
					"value": "Device Management Create Terms And Conditions",
					"action": "Create new navigation property to termsAndConditions for deviceManagement",
					"description": "Create new navigation property to termsAndConditions for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/termsAndConditions"
						}
					}
				},
				{
					"name": "Device Management Delete Terms And Conditions",
					"value": "Device Management Delete Terms And Conditions",
					"action": "Delete navigation property termsAndConditions for deviceManagement",
					"description": "Delete navigation property termsAndConditions for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Terms And Conditions",
					"value": "Device Management Get Terms And Conditions",
					"action": "Get termsAndConditions from deviceManagement",
					"description": "The terms and conditions associated with device management of the company.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Terms And Conditions",
					"value": "Device Management Update Terms And Conditions",
					"action": "Update the navigation property termsAndConditions in deviceManagement",
					"description": "Update the navigation property termsAndConditions in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions List Acceptance Statuses",
					"value": "Device Management Terms And Conditions List Acceptance Statuses",
					"action": "Get acceptanceStatuses from deviceManagement",
					"description": "The list of acceptance statuses for this T&C policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/acceptanceStatuses"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Create Acceptance Statuses",
					"value": "Device Management Terms And Conditions Create Acceptance Statuses",
					"action": "Create new navigation property to acceptanceStatuses for deviceManagement",
					"description": "Create new navigation property to acceptanceStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/acceptanceStatuses"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Delete Acceptance Statuses",
					"value": "Device Management Terms And Conditions Delete Acceptance Statuses",
					"action": "Delete navigation property acceptanceStatuses for deviceManagement",
					"description": "Delete navigation property acceptanceStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/acceptanceStatuses/{{$parameter[\"termsAndConditionsAcceptanceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Get Acceptance Statuses",
					"value": "Device Management Terms And Conditions Get Acceptance Statuses",
					"action": "Get acceptanceStatuses from deviceManagement",
					"description": "The list of acceptance statuses for this T&C policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/acceptanceStatuses/{{$parameter[\"termsAndConditionsAcceptanceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Update Acceptance Statuses",
					"value": "Device Management Terms And Conditions Update Acceptance Statuses",
					"action": "Update the navigation property acceptanceStatuses in deviceManagement",
					"description": "Update the navigation property acceptanceStatuses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/acceptanceStatuses/{{$parameter[\"termsAndConditionsAcceptanceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Acceptance Statuses Get Terms And Conditions",
					"value": "Device Management Terms And Conditions Acceptance Statuses Get Terms And Conditions",
					"action": "Get termsAndConditions from deviceManagement",
					"description": "Navigation link to the terms and conditions that are assigned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/acceptanceStatuses/{{$parameter[\"termsAndConditionsAcceptanceStatus-id\"]}}/termsAndConditions"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions List Assignments",
					"value": "Device Management Terms And Conditions List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for this T&C policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Create Assignments",
					"value": "Device Management Terms And Conditions Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Delete Assignments",
					"value": "Device Management Terms And Conditions Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/assignments/{{$parameter[\"termsAndConditionsAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Get Assignments",
					"value": "Device Management Terms And Conditions Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "The list of assignments for this T&C policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/assignments/{{$parameter[\"termsAndConditionsAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Update Assignments",
					"value": "Device Management Terms And Conditions Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/assignments/{{$parameter[\"termsAndConditionsAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions List Group Assignments",
					"value": "Device Management Terms And Conditions List Group Assignments",
					"action": "Get groupAssignments from deviceManagement",
					"description": "The list of group assignments for this T&C policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Create Group Assignments",
					"value": "Device Management Terms And Conditions Create Group Assignments",
					"action": "Create new navigation property to groupAssignments for deviceManagement",
					"description": "Create new navigation property to groupAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/groupAssignments"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Delete Group Assignments",
					"value": "Device Management Terms And Conditions Delete Group Assignments",
					"action": "Delete navigation property groupAssignments for deviceManagement",
					"description": "Delete navigation property groupAssignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/groupAssignments/{{$parameter[\"termsAndConditionsGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Get Group Assignments",
					"value": "Device Management Terms And Conditions Get Group Assignments",
					"action": "Get groupAssignments from deviceManagement",
					"description": "The list of group assignments for this T&C policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/groupAssignments/{{$parameter[\"termsAndConditionsGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Update Group Assignments",
					"value": "Device Management Terms And Conditions Update Group Assignments",
					"action": "Update the navigation property groupAssignments in deviceManagement",
					"description": "Update the navigation property groupAssignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/groupAssignments/{{$parameter[\"termsAndConditionsGroupAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Terms And Conditions Group Assignments Get Terms And Conditions",
					"value": "Device Management Terms And Conditions Group Assignments Get Terms And Conditions",
					"action": "Get termsAndConditions from deviceManagement",
					"description": "Navigation link to the terms and conditions that are assigned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/termsAndConditions/{{$parameter[\"termsAndConditions-id\"]}}/groupAssignments/{{$parameter[\"termsAndConditionsGroupAssignment-id\"]}}/termsAndConditions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management List Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Create Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Create Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Delete Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Delete Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Get Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Get Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Get Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Update Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Update Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Acceptance Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Create Acceptance Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Create Acceptance Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Delete Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Delete Acceptance Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Acceptance Statuses"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Acceptance Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Update Acceptance Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Update Acceptance Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus-id}/termsAndConditions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Acceptance Statuses Get Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Acceptance Statuses Get Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Acceptance Statuses Get Terms And Conditions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Delete Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions List Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Create Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Delete Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Delete Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Group Assignments"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Get Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Update Group Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/groupAssignments/{termsAndConditionsGroupAssignment-id}/termsAndConditions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Group Assignments Get Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Group Assignments Get Terms And Conditions"
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
						"Device Management Terms And Conditions"
					],
					"operation": [
						"Device Management Terms And Conditions Group Assignments Get Terms And Conditions"
					]
				}
			}
		},
];
