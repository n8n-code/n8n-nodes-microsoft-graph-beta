import type { INodeProperties } from 'n8n-workflow';

export const meInformationProtectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Information Protection",
					"value": "Me Delete Information Protection",
					"action": "Delete navigation property informationProtection for me",
					"description": "Delete navigation property informationProtection for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/informationProtection"
						}
					}
				},
				{
					"name": "Me Get Information Protection",
					"value": "Me Get Information Protection",
					"action": "Get informationProtection from me",
					"description": "Get informationProtection from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection"
						}
					}
				},
				{
					"name": "Me Update Information Protection",
					"value": "Me Update Information Protection",
					"action": "Update the navigation property informationProtection in me",
					"description": "Update the navigation property informationProtection in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/informationProtection"
						}
					}
				},
				{
					"name": "Me Information Protection Get Bitlocker",
					"value": "Me Information Protection Get Bitlocker",
					"action": "Get bitlocker from me",
					"description": "Get bitlocker from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/bitlocker"
						}
					}
				},
				{
					"name": "Me Information Protection Bitlocker List Recovery Keys",
					"value": "Me Information Protection Bitlocker List Recovery Keys",
					"action": "List recoveryKeys",
					"description": "Get a list of the bitlockerRecoveryKey objects and their properties.  This operation does not return the **key** property. For information about how to read the **key** property, see Get bitlockerRecoveryKey.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/bitlocker/recoveryKeys"
						}
					}
				},
				{
					"name": "Me Information Protection Bitlocker Get Recovery Keys",
					"value": "Me Information Protection Bitlocker Get Recovery Keys",
					"action": "Get recoveryKeys from me",
					"description": "The recovery keys associated with the bitlocker entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/bitlocker/recoveryKeys/{{$parameter[\"bitlockerRecoveryKey-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection List Data Loss Prevention Policies",
					"value": "Me Information Protection List Data Loss Prevention Policies",
					"action": "Get dataLossPreventionPolicies from me",
					"description": "Get dataLossPreventionPolicies from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/dataLossPreventionPolicies"
						}
					}
				},
				{
					"name": "Me Information Protection Create Data Loss Prevention Policies",
					"value": "Me Information Protection Create Data Loss Prevention Policies",
					"action": "Create new navigation property to dataLossPreventionPolicies for me",
					"description": "Create new navigation property to dataLossPreventionPolicies for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/informationProtection/dataLossPreventionPolicies"
						}
					}
				},
				{
					"name": "Me Information Protection Delete Data Loss Prevention Policies",
					"value": "Me Information Protection Delete Data Loss Prevention Policies",
					"action": "Delete navigation property dataLossPreventionPolicies for me",
					"description": "Delete navigation property dataLossPreventionPolicies for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Get Data Loss Prevention Policies",
					"value": "Me Information Protection Get Data Loss Prevention Policies",
					"action": "Get dataLossPreventionPolicies from me",
					"description": "Get dataLossPreventionPolicies from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Update Data Loss Prevention Policies",
					"value": "Me Information Protection Update Data Loss Prevention Policies",
					"action": "Update the navigation property dataLossPreventionPolicies in me",
					"description": "Update the navigation property dataLossPreventionPolicies in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/informationProtection/dataLossPreventionPolicies/{{$parameter[\"dataLossPreventionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection List Sensitivity Labels",
					"value": "Me Information Protection List Sensitivity Labels",
					"action": "Get sensitivityLabels from me",
					"description": "Get sensitivityLabels from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Me Information Protection Create Sensitivity Labels",
					"value": "Me Information Protection Create Sensitivity Labels",
					"action": "Create new navigation property to sensitivityLabels for me",
					"description": "Create new navigation property to sensitivityLabels for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Me Information Protection Delete Sensitivity Labels",
					"value": "Me Information Protection Delete Sensitivity Labels",
					"action": "Delete navigation property sensitivityLabels for me",
					"description": "Delete navigation property sensitivityLabels for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Get Sensitivity Labels",
					"value": "Me Information Protection Get Sensitivity Labels",
					"action": "Get sensitivityLabels from me",
					"description": "Get sensitivityLabels from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Update Sensitivity Labels",
					"value": "Me Information Protection Update Sensitivity Labels",
					"action": "Update the navigation property sensitivityLabels in me",
					"description": "Update the navigation property sensitivityLabels in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Sensitivity Labels List Sublabels",
					"value": "Me Information Protection Sensitivity Labels List Sublabels",
					"action": "Get sublabels from me",
					"description": "Get sublabels from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Me Information Protection Sensitivity Labels Create Sublabels",
					"value": "Me Information Protection Sensitivity Labels Create Sublabels",
					"action": "Create new navigation property to sublabels for me",
					"description": "Create new navigation property to sublabels for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Me Information Protection Sensitivity Labels Delete Sublabels",
					"value": "Me Information Protection Sensitivity Labels Delete Sublabels",
					"action": "Delete navigation property sublabels for me",
					"description": "Delete navigation property sublabels for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Sensitivity Labels Get Sublabels",
					"value": "Me Information Protection Sensitivity Labels Get Sublabels",
					"action": "Get sublabels from me",
					"description": "Get sublabels from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Sensitivity Labels Update Sublabels",
					"value": "Me Information Protection Sensitivity Labels Update Sublabels",
					"action": "Update the navigation property sublabels in me",
					"description": "Update the navigation property sublabels in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Delete Sensitivity Policy Settings",
					"value": "Me Information Protection Delete Sensitivity Policy Settings",
					"action": "Delete navigation property sensitivityPolicySettings for me",
					"description": "Delete navigation property sensitivityPolicySettings for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Me Information Protection Get Sensitivity Policy Settings",
					"value": "Me Information Protection Get Sensitivity Policy Settings",
					"action": "Get sensitivityPolicySettings from me",
					"description": "Get sensitivityPolicySettings from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Me Information Protection Update Sensitivity Policy Settings",
					"value": "Me Information Protection Update Sensitivity Policy Settings",
					"action": "Update the navigation property sensitivityPolicySettings in me",
					"description": "Update the navigation property sensitivityPolicySettings in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Me Information Protection List Threat Assessment Requests",
					"value": "Me Information Protection List Threat Assessment Requests",
					"action": "List threatAssessmentRequests",
					"description": "Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/threatAssessmentRequests"
						}
					}
				},
				{
					"name": "Me Information Protection Create Threat Assessment Requests",
					"value": "Me Information Protection Create Threat Assessment Requests",
					"action": "Create threatAssessmentRequest",
					"description": "Create a new threat assessment request. A threat assessment request can be one of the following types:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/informationProtection/threatAssessmentRequests"
						}
					}
				},
				{
					"name": "Me Information Protection Delete Threat Assessment Requests",
					"value": "Me Information Protection Delete Threat Assessment Requests",
					"action": "Delete navigation property threatAssessmentRequests for me",
					"description": "Delete navigation property threatAssessmentRequests for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Get Threat Assessment Requests",
					"value": "Me Information Protection Get Threat Assessment Requests",
					"action": "Get threatAssessmentRequests from me",
					"description": "Get threatAssessmentRequests from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Update Threat Assessment Requests",
					"value": "Me Information Protection Update Threat Assessment Requests",
					"action": "Update the navigation property threatAssessmentRequests in me",
					"description": "Update the navigation property threatAssessmentRequests in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Threat Assessment Requests List Results",
					"value": "Me Information Protection Threat Assessment Requests List Results",
					"action": "Get results from me",
					"description": "A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results"
						}
					}
				},
				{
					"name": "Me Information Protection Threat Assessment Requests Create Results",
					"value": "Me Information Protection Threat Assessment Requests Create Results",
					"action": "Create new navigation property to results for me",
					"description": "Create new navigation property to results for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results"
						}
					}
				},
				{
					"name": "Me Information Protection Threat Assessment Requests Delete Results",
					"value": "Me Information Protection Threat Assessment Requests Delete Results",
					"action": "Delete navigation property results for me",
					"description": "Delete navigation property results for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Threat Assessment Requests Get Results",
					"value": "Me Information Protection Threat Assessment Requests Get Results",
					"action": "Get results from me",
					"description": "A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				},
				{
					"name": "Me Information Protection Threat Assessment Requests Update Results",
					"value": "Me Information Protection Threat Assessment Requests Update Results",
					"action": "Update the navigation property results in me",
					"description": "Update the navigation property results in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Delete Information Protection"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Delete Information Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Get Information Protection"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Get Information Protection"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Get Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/bitlocker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Bitlocker"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Bitlocker"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Bitlocker"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/bitlocker/recoveryKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker List Recovery Keys"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker Get Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker Get Recovery Keys"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Bitlocker Get Recovery Keys"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/dataLossPreventionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/dataLossPreventionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Create Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/dataLossPreventionPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Create Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Data Loss Prevention Policies"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Data Loss Prevention Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/sensitivityLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Sensitivity Labels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Delete Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Delete Sublabels"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Get Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Get Sublabels"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Get Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Sensitivity Policy Settings"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Sensitivity Policy Settings"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Sensitivity Policy Settings"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/sensitivityPolicySettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/threatAssessmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection List Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/threatAssessmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Create Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/threatAssessmentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Create Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Delete Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Threat Assessment Requests"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Get Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Update Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests List Results"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Create Results"
					]
				}
			}
		},
		{
			"displayName": "POST /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Create Results"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Delete Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Delete Results"
					]
				}
			}
		},
		{
			"displayName": "GET /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Get Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Get Results"
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
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Get Results"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Update Results"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Information Protection"
					],
					"operation": [
						"Me Information Protection Threat Assessment Requests Update Results"
					]
				}
			}
		},
];
